import express from 'express';
import { UserRoutes } from '../modules/user/routes';
import { AuthRoutes } from '../modules/auth/routes';
import { CategoryRoutes } from '../modules/category/routes';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
