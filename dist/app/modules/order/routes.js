"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_1 = require("./validation");
const router = express_1.default.Router();
router.post('/create-order', (0, auth_1.default)(client_1.UserRole.customer), (0, validateRequest_1.default)(validation_1.OrderValidators.createOrderZodSchema), controllers_1.OrderControllers.createOrder);
router.get('/', (0, auth_1.default)(client_1.UserRole.admin, client_1.UserRole.customer), controllers_1.OrderControllers.getAllOrders);
router.get('/:orderId', (0, auth_1.default)(client_1.UserRole.admin, client_1.UserRole.customer), controllers_1.OrderControllers.getOrder);
exports.OrderRoutes = router;
