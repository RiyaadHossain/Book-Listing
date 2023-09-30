"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(client_1.UserRole.admin), controllers_1.UserControllers.getAllUsers);
router.get('/:id', (0, auth_1.default)(client_1.UserRole.admin), controllers_1.UserControllers.getUser);
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.admin), controllers_1.UserControllers.updateUser);
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.admin), controllers_1.UserControllers.deleteUser);
exports.UserRoutes = router;
