import express from "express";
import {
  createKYC,
  getKYCById,
  getKYCByEmail,
  updateKYCStatus,
  getAllKYC,
  deleteKYC,
  getUserKYC
} from "../controllers/kycController.js";
import protect from '../middlewares/authMiddleware.js';

const kycRouter = express.Router();

kycRouter.get("/me", protect, getUserKYC); // GET /api/v1/kyc/me
kycRouter.post("/create", createKYC);
kycRouter.get("/", getAllKYC);
kycRouter.get("/:id", getKYCById);
kycRouter.get("/email/:email", getKYCByEmail);
kycRouter.patch("/:id/status", updateKYCStatus);
kycRouter.delete("/:id", deleteKYC);


export default kycRouter;
