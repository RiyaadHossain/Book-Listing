import express from 'express';
import { OrderControllers } from './controllers';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { OrderValidators } from './validation';
const router = express.Router();

router.post(
  '/create-order',
  auth(UserRole.customer),
  validateRequest(OrderValidators.createOrderZodSchema),
  OrderControllers.createOrder
);

router.get('/', auth(UserRole.admin, UserRole.customer), OrderControllers.getAllOrders); 

router.get('/:orderId', auth(UserRole.admin, UserRole.customer), OrderControllers.getOrder);

export const OrderRoutes = router;
