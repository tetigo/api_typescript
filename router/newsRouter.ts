import express from 'express'
import NewsController from '../controller/newsController'

const newsRouter = express.Router()

newsRouter.route('/').get(NewsController.get);
newsRouter.route('/:id').get(NewsController.getById);
newsRouter.route('/').post(NewsController.create);
newsRouter.route('/:id').put(NewsController.update);
newsRouter.route('/:id').delete(NewsController.delete);

export default newsRouter


