import express from 'express';
import { BookControllers } from './controllers';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { BookValidators } from './validation';
const router = express.Router();

router.post(
  '/',
  auth(UserRole.ADMIN),
  validateRequest(BookValidators.createBookZodSchema),
  BookControllers.createBook
);

router.get('/', auth(UserRole.ADMIN), BookControllers.getAllBooks); 

router.get('/:categoryId/category', auth(UserRole.ADMIN), BookControllers.getBooksByCategoryId);

router.get('/:id', auth(UserRole.ADMIN), BookControllers.getBook);

router.patch('/:id', auth(UserRole.ADMIN), BookControllers.updateBook);

router.delete('/:id', auth(UserRole.ADMIN), BookControllers.deleteBook);

export const BookRoutes = router;
