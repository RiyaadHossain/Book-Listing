"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const validation_1 = require("./validation");
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(validation_1.AuthValidators.signupZodSchema), controllers_1.AuthControllers.signup);
router.post('/signin', (0, validateRequest_1.default)(validation_1.AuthValidators.signInZodSchema), controllers_1.AuthControllers.signin);
exports.AuthRoutes = router;
