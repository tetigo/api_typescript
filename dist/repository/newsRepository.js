"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const newsSchema_1 = require("../models/newsSchema");
exports.default = mongoose_1.default.model('news', newsSchema_1.NewsSchema);
