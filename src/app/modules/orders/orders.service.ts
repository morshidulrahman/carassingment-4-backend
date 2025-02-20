import AppError from '../../errors/AppError';
import { TOrderData } from './orders.interface';
import { OrderModel } from './orders.model';

const AddOrderDataintoDb = async (payload: TOrderData) => {
  const result = await OrderModel.create(payload);
  return result;
};

const getallOrderintoDb = async () => {
  const result = await OrderModel.find();
  return result;
};

const UpdateOrdertIntoDb = async (
  payload: Partial<TOrderData>,
  productId: string,
) => {
  const result = await OrderModel.findByIdAndUpdate(productId, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const DeleteOrderIntoDb = async (orderId: string) => {
  const isaviable = await OrderModel.findById(orderId);
  if (!isaviable) {
    throw new AppError(404, 'order is not available');
  } else {
    const result = await OrderModel.findByIdAndDelete(orderId);
    return result;
  }
};

export const ordersServices = {
  AddOrderDataintoDb,
  getallOrderintoDb,
  UpdateOrdertIntoDb,
  DeleteOrderIntoDb,
};
