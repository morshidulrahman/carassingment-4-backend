import express from 'express';
import { orderController } from './orders.controler';

const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getallOrder);

export const orderRouter = router;
