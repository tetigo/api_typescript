"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const newsService_1 = __importDefault(require("../services/newsService"));
const helper_1 = __importDefault(require("../infra/helper"));
const mongoose_1 = __importDefault(require("mongoose"));
const redis_1 = __importDefault(require("redis"));
class NewsController {
    get(req, res) {
        let client = redis_1.default.createClient(6379, 'redis');
        client.get('news', (err, reply) => {
            if (reply) {
                console.log('redis');
                helper_1.default.sendResponse(res, http_status_1.default.OK, JSON.parse(reply));
            }
            else {
                newsService_1.default.get()
                    .then(news => {
                    console.log('mongo');
                    client.set('news', JSON.stringify(news));
                    client.expire('news', 60);
                    helper_1.default.sendResponse(res, http_status_1.default.OK, news);
                })
                    .catch(err => console.error.bind(console, `error: ${err}`));
            }
        });
    }
    getById(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        newsService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, http_status_1.default.OK, news))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    create(req, res) {
        const news = req.body;
        newsService_1.default.create(news)
            .then(news => helper_1.default.sendResponse(res, http_status_1.default.OK, news))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    update(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        const news = req.body;
        newsService_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, http_status_1.default.OK, 'atualizado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    delete(req, res) {
        const _id = new mongoose_1.default.Types.ObjectId(req.params.id);
        newsService_1.default.delete(_id)
            .then(news => helper_1.default.sendResponse(res, http_status_1.default.OK, 'apagado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
}
exports.default = new NewsController();
