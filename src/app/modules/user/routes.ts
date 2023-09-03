import express from 'express';
import { UserControllers } from './controllers';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
const router = express.Router();

router.get('/', auth(UserRole.ADMIN), UserControllers.getAllUsers);
router.get('/:id', auth(UserRole.ADMIN), UserControllers.getUser);
router.patch('/:id', auth(UserRole.ADMIN), UserControllers.updateUser);
router.delete('/:id', auth(UserRole.ADMIN), UserControllers.deleteUser);

export const UserRoutes = router;
