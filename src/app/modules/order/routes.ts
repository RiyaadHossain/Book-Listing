import express from 'express';
import { OrderControllers } from './controllers';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidators } from './validation';
const router = express.Router();

router.post(
  '/create-order',
  auth(UserRole.CUSTOMER),
  validateRequest(OrderValidators.createOrderZodSchema),
  OrderControllers.createOrder
);

router.get('/', auth(UserRole.ADMIN, UserRole.CUSTOMER), OrderControllers.getAllOrders); 

router.get('/:orderId', auth(UserRole.ADMIN, UserRole.CUSTOMER), OrderControllers.getOrder);

export const OrderRoutes = router;
