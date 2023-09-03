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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const constant_1 = require("./constant");
const getAllUsers = (pagination, userSearchAndFilter) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(pagination);
    const { search } = userSearchAndFilter, filters = __rest(userSearchAndFilter, ["search"]);
    const andCondition = [];
    // Searching
    if (search) {
        andCondition.push({
            OR: constant_1.userSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    // Filter
    if (Object.keys(filters).length) {
        andCondition.push({
            AND: Object.keys(filters).map(field => ({
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                [field]: filters[field]
            }))
        });
    }
    const whereCondition = andCondition.length
        ? { AND: andCondition }
        : {};
    const data = yield prisma_1.default.user.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
    });
    const total = yield prisma_1.default.user.count({ where: whereCondition });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data,
    };
});
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.user.findUnique({ where: { id } });
    return data;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.user.update({ where: { id }, data: payload });
    return data;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.user.delete({ where: { id } });
    return data;
});
exports.UserServices = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
};
