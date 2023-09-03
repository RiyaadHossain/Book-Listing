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
exports.CategoryServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const constants_1 = require("./constants");
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.category.create({
        data: payload,
    });
    return data;
});
const getAllCategories = (pagination, categorySearchAndFilter) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(pagination);
    const { search } = categorySearchAndFilter;
    const andCondition = [];
    // Searching
    if (search) {
        andCondition.push({
            OR: constants_1.categorySearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    const whereCondition = andCondition.length
        ? { AND: andCondition }
        : {};
    const data = yield prisma_1.default.category.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
    });
    const total = yield prisma_1.default.category.count({ where: whereCondition });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data,
    };
});
const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.category.findUnique({ where: { id } });
    return data;
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.category.update({ where: { id }, data: payload });
    return data;
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.category.delete({ where: { id } });
    return data;
});
exports.CategoryServices = {
    createCategory,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory,
};
