"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.NewsSchema = new mongoose_1.default.Schema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    link: { type: String },
    active: { type: Boolean },
});
