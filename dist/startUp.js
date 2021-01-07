"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./infra/db"));
const auth_1 = __importDefault(require("./infra/auth"));
const uploads_1 = __importDefault(require("./infra/uploads"));
const router_1 = __importDefault(require("./router"));
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this._db.createConnection();
        this.app = express_1.default();
        this.middleware();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: 'GET, POST, PUT, DELETE, OPTIONS',
            origin: '*'
        };
        this.app.use(cors_1.default(options));
    }
    middleware() {
        this.app.use(express_1.json());
        this.app.use(express_1.urlencoded({ extended: true }));
        this.enableCors();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.json({ versao: '0.0.1' });
        });
        this.app.route('/uploads').post(uploads_1.default.single('file_patati'), (req, res) => {
            try {
                res.json(req.file);
            }
            catch (error) {
                console.log(error);
            }
        });
        //JWT
        this.app.use(auth_1.default.validate);
        //newsController
        this.app.use('/api/v1', router_1.default);
    }
}
exports.default = new StartUp();
