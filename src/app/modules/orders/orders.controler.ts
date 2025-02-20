import catchAsync from '../../utils/catchAsync';
import SendResponse from '../../utils/SendResponse';
import httpStatus from 'http-status';
import { ordersServices } from './orders.service';

const createOrder = catchAsync(async (req, res) => {
  const orderData = req.body;

  const result = await ordersServices.AddOrderDataintoDb(orderData);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getallOrder = catchAsync(async (req, res) => {
  const result = await ordersServices.getallOrderintoDb();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Orders fetched successfully',
    data: result,
  });
});

export const orderController = {
  createOrder,
  getallOrder,
};
