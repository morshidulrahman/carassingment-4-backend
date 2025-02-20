import express from 'express';
import { orderController } from './orders.controler';

const router = express.Router();

router.post('/orders', orderController.createOrder);
router.get('/orders', orderController.getallOrder);
router.put('/order/:orderId', orderController.UpdateOrder);
router.delete('/order/:orderId', orderController.DeleteOrder);

export const orderRouter = router;
