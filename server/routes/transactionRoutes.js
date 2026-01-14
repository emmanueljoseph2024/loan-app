// routes/transactionRoutes.js
import express from "express";
import { getLoan } from "../controllers/transactionController.js";
import { stripeWebhook } from "../controllers/webhookController.js";
import { protect } from '../middlewares/authMiddleware.js';
import { listBanks } from "../controllers/transactionController.js";
import { repayLoan } from '../controllers/repayLoanController.js';
import { adminDashboard } from "../controllers/adminDashboardController.js";
import { userDashboard } from "../controllers/userDashboardController.js";
import { getTransaction } from "../controllers/transactionController.js";
import { getLoanStatus } from "../controllers/transactionController.js";

const transactionRouter = express.Router();

// Transactions
//Dashboard
transactionRouter.get("/admin", protect, adminDashboard);
transactionRouter.get("/user", protect, userDashboard);
//history
transactionRouter.get("/history", protect, getTransaction );
//repayLoan
transactionRouter.post("/repay", protect, repayLoan);
transactionRouter.get("/status", protect, getLoanStatus);
transactionRouter.post("/transfer", protect, getLoan);
transactionRouter.get("/listbanks", listBanks);
// Stripe webhook
transactionRouter.post("/webhook", express.raw({ type: "application/json" }), stripeWebhook);

export default transactionRouter;
