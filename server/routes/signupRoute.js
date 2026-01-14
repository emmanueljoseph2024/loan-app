import express from 'express'
import { create } from '../controllers/signupController.js'

const signupRoute = express.Router();
//Routes
signupRoute.post('/signup', create);

export default signupRoute;