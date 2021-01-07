import mongoose from 'mongoose';
import {NewsSchema, INewsSchema} from '../models/newsSchema'


export default mongoose.model<INewsSchema>('news', NewsSchema);