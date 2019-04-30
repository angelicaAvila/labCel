import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';

import db from '../database'

const JWT_Secret = 'secret_key';
class AuthController{

    // public index (req:Request,res:Response){ 
    //     res.json({text:'API is /api/auth'});
    // }

    public async one(req:Request, res:Response){
        const { id } = req.params;
        const item = await db.query('SELECT * FROM usuario where idUsuario = ?', [id]);
        if (item.length > 0){
            return res.json(item[0]);
        }
        res.status(404).json({text: 'User not found'});
    }

    public async login(req:Request,res:Response){
        // console.log(req.body);
        // await db.query('INSERT INTO producto set ?', [req.body]);
        if(req.body){
            // const {nombre} = req.params;
            // const {pass} = req.params;
            console.log(req.body);
            const item = await db.query('SELECT * FROM usuario where nombre = ? and pass = ?', [req.body.nombre,req.body.pass]);
            // console.log(user);
            console.log(item);
            if(item.length > 0 )
            {
                var token = jwt.sign(item[0].nombre,JWT_Secret);
                res.status(200).send({
                    signed_user: item[0].nombre,
                    token: token
                });                
            } else{
                res.status(403).send({
                    errorMessage: 'Auth required'
                });
            }
            }    else{
                res.status(403).send({
                    errorMessage: 'ingresa usuario y constrasena'
                });
            }

        }
        // await db.query('')
        // res.json({message:'adding item'});
}



export const authController = new AuthController();