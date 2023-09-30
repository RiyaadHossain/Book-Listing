import express from 'express';
import { UserControllers } from './controllers';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
const router = express.Router();

router.get('/', auth(UserRole.admin), UserControllers.getAllUsers);
router.get('/:id', auth(UserRole.admin), UserControllers.getUser);
router.patch('/:id', auth(UserRole.admin), UserControllers.updateUser);
router.delete('/:id', auth(UserRole.admin), UserControllers.deleteUser);

export const UserRoutes = router;
