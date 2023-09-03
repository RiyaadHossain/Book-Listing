"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidators = void 0;
const zod_1 = require("zod");
const signupZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z.string({ required_error: 'Email is required' }),
        password: zod_1.z.string({ required_error: 'password is required' }),
        contactNo: zod_1.z.string({ required_error: 'Contact No is required' }),
        address: zod_1.z.string({ required_error: 'Adress is required' }),
        profileImg: zod_1.z.string({ required_error: 'Profile Image is required' }),
    }),
});
const signInZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email is required' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
    }),
});
exports.AuthValidators = { signupZodSchema, signInZodSchema };
