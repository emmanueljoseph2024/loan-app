// controllers/webhookController.js
import Transaction from "../models/transactionModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.log("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const transaction = await Transaction.findOne({ stripePaymentIntentId: paymentIntent.id });
    if (transaction) {
      transaction.status = "completed";
      await transaction.save();

      // Update admin balance simulation
      const admin = await Admin.findById(transaction.sender);
      admin.balance -= transaction.amount;
      await admin.save();
    }
  }

  res.json({ received: true });
};
