"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../modules/user/routes");
const routes_2 = require("../modules/auth/routes");
const routes_3 = require("../modules/category/routes");
const routes_4 = require("../modules/book/routes");
const routes_5 = require("../modules/order/routes");
const routes_6 = require("../modules/profile/routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        routes: routes_2.AuthRoutes
    },
    {
        path: "/users",
        routes: routes_1.UserRoutes
    },
    {
        path: "/categories",
        routes: routes_3.CategoryRoutes
    },
    {
        path: "/books",
        routes: routes_4.BookRoutes
    },
    {
        path: "/orders",
        routes: routes_5.OrderRoutes
    },
    {
        path: "/profile",
        routes: routes_6.ProfileRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
