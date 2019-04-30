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
const database_1 = __importDefault(require("../database"));
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM usuario');
            res.json(users);
        });
    }
    //gets by id
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('SELECT * FROM usuario where idUsuario = ?', [id]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: 'User not found' });
        });
    }
    // public async getByName(req:Request, res:Response){
    //     const {nombre} = req.params;
    //     // const {pass} = req.params;
    //     const username = await db.query('SELECT 1 FROM usuario where nombre = ?', [nombre]);
    //     if(username.length > 0){
    //         return res.json(username[0]);
    //     }
    //     res.status(404).json({text:'User not found'});
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ message: 'adding user' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario where idUsuario = ?', [id]);
            res.json({ message: 'User deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario set ? where idUsuario = ?', [req.body, id]);
            res.json({ message: 'User info was updated' });
        });
    }
}
exports.userController = new UserController();
