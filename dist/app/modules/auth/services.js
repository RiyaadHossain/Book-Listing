"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const signup = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.user.create({
        data: user,
    });
    return data;
});
const signin = (signInData) => __awaiter(void 0, void 0, void 0, function* () {
    // Check User Existence
    const userExist = yield prisma_1.default.user.findFirst({
        where: {
            email: signInData.email,
        },
    });
    if (!userExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "User doesn't exist!");
    }
    const { id, role, password } = userExist;
    // Check Password
    if (signInData.password !== password) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Incorrect credentials!');
    }
    // Generate Token
    const token = jwtHelpers_1.jwtHelpers.createToken({ userId: id, role }, process.env.JWT_SECRET, process.env.JWT_SECRET_EXPIRE);
    return { token };
});
exports.AuthServices = {
    signup,
    signin,
};
