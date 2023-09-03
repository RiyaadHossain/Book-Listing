import express from 'express';
import { ProfileControllers } from './controllers';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
const router = express.Router();



router.get('/', auth(UserRole.ADMIN, UserRole.CUSTOMER), ProfileControllers.getUserProfile); 

export const ProfileRoutes = router;
