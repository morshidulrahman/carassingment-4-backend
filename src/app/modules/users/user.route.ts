import express from 'express';
import { userController } from './user.controller';
import validationRequest from '../../middlewares/validateRequest';
import { UservalidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/auth/register',
  validationRequest(UservalidationSchema.createUserValidationSchema),
  userController.createUser,
);

router.put('/user/:userId', userController.updateUser);
router.get('/users', userController.getallUser);

export const userRouter = router;
