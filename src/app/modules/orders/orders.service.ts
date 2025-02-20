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

export const ordersServices = {
  AddOrderDataintoDb,
  getallOrderintoDb,
};
