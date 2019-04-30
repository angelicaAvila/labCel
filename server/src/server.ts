import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken'


import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/usersRoutes';
import itemRoutes from './routes/itemRoutes';
import authRoutes from './routes/authRoutes';

const JWT_Secret = 'secret_key';
class Server{
  public app : Application;
    
  constructor(){
      this.app = express();
      this.config();
      this.routes();
    }
  
  config(): void{
      this.app.set('port',process.env.PORT || 3000);
      this.app.use(morgan('dev'));
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.urlencoded({extended:false}));
      this.app.use(bodyParser.json());
      
    }

    //aqui agregar demas rutas
  routes(): void{
      this.app.use(indexRoutes);
      this.app.use('/api/user',userRoutes);
      this.app.use('/api/item',itemRoutes);
      this.app.use('/api/auth',authRoutes);
  }

  start(): void{
      this.app.listen(this.app.get('port'), () =>{
          console.log('Server on port ', this.app.get('port'));
        }
      );
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