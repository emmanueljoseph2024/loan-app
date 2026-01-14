import express from "express";
import { bankDetails } from '../controllers/bankdetailsController.js'
import { getUserBankDetails } from "../controllers/bankdetailsController.js";
import { protect } from '../middlewares/authMiddleware.js'
const detailsRoute = express.Router();

detailsRoute.post('/accountdetails', protect, bankDetails);
detailsRoute.get('/accountdetails', protect,  getUserBankDetails);

export default detailsRoute;