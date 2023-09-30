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
exports.BookServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const constant_1 = require("./constant");
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.book.create({
        data: payload,
        include: {
            category: true,
        },
    });
    return data;
});
const getAllBooks = (pagination, bookSearchAndFilter) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(pagination);
    const { search } = bookSearchAndFilter, filters = __rest(bookSearchAndFilter, ["search"]);
    const andCondition = [];
    // Searching
    if (search) {
        andCondition.push({
            OR: constant_1.bookSearchableFields.map(field => ({
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
            AND: Object.keys(filters).map((field) => {
                if (constant_1.bookRelationalFields.includes(field)) {
                    return {
                        [constant_1.bookRelationalFieldsMapper[field]]: {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            id: filters[field],
                        },
                    };
                }
                else {
                    return {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        [field]: filters[field],
                    };
                }
            }),
        });
    }
    const whereCondition = andCondition.length
        ? { AND: andCondition }
        : {};
    const data = yield prisma_1.default.book.findMany({
        where: whereCondition,
        include: { category: true },
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
    });
    const total = yield prisma_1.default.book.count({ where: whereCondition });
    return {
        meta: {
            total,
            page,
            limit,
        },
        data,
    };
});
const getBooksByCategoryId = (categoryId, pagination) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(pagination);
    const data = yield prisma_1.default.book.findMany({
        where: {
            category: {
                id: categoryId,
            },
        },
        include: { category: true },
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
    });
    const total = yield prisma_1.default.book.count();
    return {
        meta: {
            total,
            page,
            limit,
        },
        data,
    };
});
const getBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.book.findUnique({
        where: { id },
        include: { category: true },
    });
    return data;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.book.update({
        where: { id },
        data: payload,
        include: { category: true },
    });
    return data;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.book.delete({
        where: { id },
        include: { category: true },
    });
    return data;
});
exports.BookServices = {
    createBook,
    getAllBooks,
    getBooksByCategoryId,
    getBook,
    updateBook,
    deleteBook,
};
