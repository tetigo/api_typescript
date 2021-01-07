import HttpStatus from 'http-status';
import NewsService from '../services/newsService';
import { INewsSchema } from '../models/newsSchema';
import Helper from '../infra/helper';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import redis from 'redis';

class NewsController {
    get(req: Request, res: Response) {

        let client = redis.createClient(6379,'redis')

        client.get('news', (err, reply) => {
            if (reply) {
                console.log('redis')
                Helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply))
            } else {
                NewsService.get()
                    .then(news => {
                        console.log('mongo')
                        client.set('news', JSON.stringify(news))
                        client.expire('news', 60)
                        Helper.sendResponse(res, HttpStatus.OK, news)
                    })
                    .catch(err => console.error.bind(console, `error: ${err}`));
            }
        })

    }
    getById(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    create(req: Request, res: Response) {
        const news: INewsSchema = req.body;
        NewsService.create(news)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    update(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        const news: INewsSchema = req.body;
        NewsService.update(_id, news)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, 'atualizado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
    delete(req: Request, res: Response) {
        const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
        NewsService.delete(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, 'apagado'))
            .catch(err => console.error.bind(console, `error: ${err}`));
    }
}

export default new NewsController();


