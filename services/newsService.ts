import mongoose from 'mongoose';
import { INewsSchema } from '../models/newsSchema';
import NewsRepository from '../repository/newsRepository';

class NewsService {
    get() {
        return NewsRepository.find({});
    }

    getById(_id: mongoose.Types.ObjectId) {
        return NewsRepository.findById({ _id });

    }

    create(news: INewsSchema){
        return NewsRepository.create(news);
    }

    update(_id: mongoose.Types.ObjectId, news: INewsSchema){
        return NewsRepository.findByIdAndUpdate(_id, news) 
    }

    delete(_id: mongoose.Types.ObjectId){
        return NewsRepository.findByIdAndDelete(_id);
    }
}


export default new NewsService(); 