"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_1 = require("./validation");
const router = express_1.default.Router();
router.post('/create-category', (0, auth_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(validation_1.CategoryValidators.createCategoryZodSchema), controllers_1.CategoryControllers.createCategory);
router.get('/', (0, auth_1.default)(client_1.UserRole.ADMIN), controllers_1.CategoryControllers.getAllCategories);
router.get('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN), controllers_1.CategoryControllers.getCategory);
router.patch('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN), (0, validateRequest_1.default)(validation_1.CategoryValidators.updateCategoryZodSchema), controllers_1.CategoryControllers.updateCategory);
router.delete('/:id', (0, auth_1.default)(client_1.UserRole.ADMIN), controllers_1.CategoryControllers.deleteCategory);
exports.CategoryRoutes = router;
