"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const getUUID = () => {
    const today = new Date();
    return '' +
        today.getFullYear() +
        today.getMonth() +
        today.getDate() +
        today.getHours() +
        today.getMinutes() +
        today.getSeconds();
};
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        console.log(req.body.text);
        const arq = file.originalname.split('.');
        const name = arq[0];
        const ext = arq[1];
        cb(null, `${name}-${getUUID()}.${ext}`);
    }
});
const uploads = multer_1.default({ storage: storage });
exports.default = uploads;
