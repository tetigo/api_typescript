"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newsController_1 = __importDefault(require("../controller/newsController"));
const newsRouter = express_1.default.Router();
newsRouter.route('/').get(newsController_1.default.get);
newsRouter.route('/:id').get(newsController_1.default.getById);
newsRouter.route('/').post(newsController_1.default.create);
newsRouter.route('/:id').put(newsController_1.default.update);
newsRouter.route('/:id').delete(newsController_1.default.delete);
exports.default = newsRouter;
