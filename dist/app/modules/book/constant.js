"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRelationalFieldsMapper = exports.bookRelationalFields = exports.bookSearchableFields = exports.bookSearchAndFilter = void 0;
exports.bookSearchAndFilter = ['search', 'author', 'genre', 'categoryId'];
exports.bookSearchableFields = ['title', 'author', 'genre'];
exports.bookRelationalFields = ['categoryId'];
exports.bookRelationalFieldsMapper = {
    categoryId: 'category',
};
