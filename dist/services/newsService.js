"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsRepository_1 = __importDefault(require("../repository/newsRepository"));
class NewsService {
    get() {
        return newsRepository_1.default.find({});
    }
    getById(_id) {
        return newsRepository_1.default.findById({ _id });
    }
    create(news) {
        return newsRepository_1.default.create(news);
    }
    update(_id, news) {
        return newsRepository_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return newsRepository_1.default.findByIdAndDelete(_id);
    }
}
exports.default = new NewsService();
