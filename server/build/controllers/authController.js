"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../database"));
const JWT_Secret = 'secret_key';
class AuthController {
    // public index (req:Request,res:Response){ 
    //     res.json({text:'API is /api/auth'});
    // }
    one(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const item = yield database_1.default.query('SELECT * FROM usuario where idUsuario = ?', [id]);
            if (item.length > 0) {
                return res.json(item[0]);
            }
            res.status(404).json({ text: 'User not found' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            // await db.query('INSERT INTO producto set ?', [req.body]);
            if (req.body) {
                // const {nombre} = req.params;
                // const {pass} = req.params;
                console.log(req.body);
                const item = yield database_1.default.query('SELECT * FROM usuario where nombre = ? and pass = ?', [req.body.nombre, req.body.pass]);
                // console.log(user);
                console.log(item);
                if (item.length > 0) {
                    var token = jsonwebtoken_1.default.sign(item[0].nombre, JWT_Secret);
                    res.status(200).send({
                        signed_user: item[0].nombre,
                        token: token
                    });
                }
                else {
                    res.status(403).send({
                        errorMessage: 'Auth required'
                    });
                }
            }
            else {
                res.status(403).send({
                    errorMessage: 'ingresa usuario y constrasena'
                });
            }
        });
    }
}
exports.authController = new AuthController();
