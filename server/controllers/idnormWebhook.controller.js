import crypto from "crypto";
import KYC from "../models/kycModel.js";

export const idnormWebhook = async (req, res) => {
  try {
    const signatureHeader = req.headers["idnorm-signature"];
    const webhookSecret = process.env.IDNORM_WEBHOOK_SECRET;
    const rawBody = JSON.stringify(req.body);

    const [timestamp, receivedSignature] = signatureHeader.split(".");

    // Optional: Check timestamp freshness (5 mins)
    if (Math.abs(Date.now()/1000 - parseInt(timestamp)) > 300) {
      return res.status(400).send("Timestamp too old");
    }

    // Verify HMAC-SHA256
    const hmac = crypto.createHmac("sha256", webhookSecret);
    hmac.update(Buffer.from(timestamp));
    hmac.update(rawBody);
    const expectedSignature = hmac.digest("hex");

    if (!crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(receivedSignature))) {
      return res.status(400).send("Invalid signature");
    }

    // Update KYC status
    const { sessionId, status, result } = req.body;
    const kyc = await KYC.findOne({ idnormSessionId: sessionId });
    if (!kyc) return res.status(404).send("KYC not found");

    kyc.verificationStatus = status; // PASSED, FAILED, IN_REVIEW
    kyc.verificationResult = result;
    await kyc.save();

    res.sendStatus(200);

  } catch (error) {
    console.error("Webhook error:", error);
    res.sendStatus(500);
  }
};
