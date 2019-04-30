"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const itemRoutes_1 = __importDefault(require("./routes/itemRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const JWT_Secret = 'secret_key';
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    //aqui agregar demas rutas
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/user', usersRoutes_1.default);
        this.app.use('/api/item', itemRoutes_1.default);
        this.app.use('/api/auth', authRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
// const express = require('express');
// var mysql = require('mysql');
// const app = express();
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "odlm2050",
//   database: "BD"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   //   console.log("Connected!");
// });
// app.listen('3000', () =>{
//   console.log('ok');
// });
// app.get('/getData',function(req,res){
//   // res.json(points);
//   // get from DB
//    console.log('si entro');
//   //  var user = req.body.name;
//     //  var pass = req.body.password;
//     con.query(`SELECT * FROM usuario` , function (err, result, fields) {
//       // where nombre like ${user} and pass like ${pass}
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//     });
//  });
