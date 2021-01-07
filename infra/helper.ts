import { HttpStatus } from "http-status";
import { INewsSchema } from "../models/newsSchema";
import { Response } from 'express';

class Helper {
    sendResponse = (res: Response, statusCode: number, data: INewsSchema[] | INewsSchema | string | null) => {
        res.status(statusCode).json({ result: data })
    }
}

export default new Helper();