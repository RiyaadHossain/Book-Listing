import express from 'express';
import { UserRoutes } from '../modules/user/routes';
import { AuthRoutes } from '../modules/auth/routes';
import { CategoryRoutes } from '../modules/category/routes';
import { BookRoutes } from '../modules/book/routes';
import { OrderRoutes } from '../modules/order/routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: AuthRoutes
  },
  {
    path: "/users",
    routes: UserRoutes
  },
  {
    path: "/categories",
    routes: CategoryRoutes
  },
  {
    path: "/books",
    routes: BookRoutes
  },
  {
    path: "/orders",
    routes: OrderRoutes
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
