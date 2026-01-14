import express from 'express'
import { getUserBankDetails, bankDetails } from '../controllers/admindetailsController.js'
import { protect } from '../middlewares/authMiddleware.js'

const adminRouter = express.Router();

adminRouter.get('/admindetails', getUserBankDetails);
adminRouter.post('/admindetails', protect, bankDetails);

export default adminRouter;