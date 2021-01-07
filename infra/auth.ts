import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Configs from './configs'

class Auth {
    validate(req: Request, res: Response, next: Function) {
        let token: string = String(req.headers['x-access-token'])
        if (token !== 'undefined') {
            jwt.verify(token, Configs.secret, (err, decoded) => {
                if (err) {
                    return res.status(403).send({
                        success: false,
                        msg: '403 - Invalid Token',
                    })
                } else {
                    next()
                }
            })
        } else {
            return res.status(401).send({
                success: false,
                msg: '401 - unauthorized',
            })
        }
    }
}

export default new Auth()