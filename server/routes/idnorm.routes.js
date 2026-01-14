import express from "express";
import { createIdNormSession } from "../controllers/idnorm.controller.js";
import { idnormWebhook } from "../controllers/idnormWebhook.controller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/start", protect, createIdNormSession);
router.post("/webhook", idnormWebhook); // no auth; signature verifies request

export default router;
