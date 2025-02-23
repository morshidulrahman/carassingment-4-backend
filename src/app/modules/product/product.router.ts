import express from 'express';
import { productController } from './product.controller';
import validationRequest from '../../middlewares/validateRequest';
import { productValidationSchema } from './product.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/add-product',
  auth('admin'),
  validationRequest(productValidationSchema.CreateProductValidationSchema),
  productController.createProduct,
);

router.get('/allproducts', auth('admin'), productController.getallproduct);
router.get('/product/:id', auth('admin'), productController.getSingleProduct);

router.put(
  '/product/:productId',
  auth('admin'),
  validationRequest(productValidationSchema.UpdateProductValidationSchema),
  productController.updateProduct,
);

router.delete(
  '/product/:productId',
  auth('admin'),
  productController.DeleteProduct,
);

export const porductRouter = router;
