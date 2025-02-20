import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);

  return result;
};

const getalluserintodb = async () => {
  const result = await User.find();

  return result;
};

const UpdateuserIntoDb = async (payload: Partial<TUser>, productId: string) => {
  const result = await User.findByIdAndUpdate(productId, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const userServices = {
  createUserIntoDB,
  UpdateuserIntoDb,
  getalluserintodb,
};
