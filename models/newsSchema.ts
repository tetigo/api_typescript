import mongoose from 'mongoose';

export interface INewsSchema extends mongoose.Document{
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    link: { type: String },
    active: { type: Boolean },
}

export const NewsSchema = new mongoose.Schema({
    hat: { type: String },
    title: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: Date },
    link: { type: String },
    active: { type: Boolean },
})



