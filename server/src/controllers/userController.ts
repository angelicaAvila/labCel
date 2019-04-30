import {Request, Response} from 'express';

import db from '../database'

class UserController{

    public async list (req:Request,res:Response){ 
       const users = await db.query('SELECT * FROM usuario');
        res.json(users);
    }

    //gets by id
    public async getOne (req:Request,res:Response){ 
        const { id } = req.params;
        const user = await db.query('SELECT * FROM usuario where idUsuario = ?', [id]);
        if (user.length > 0){
            return res.json(user[0]);
        }
        res.status(404).json({text: 'User not found'});
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

    public async create(req:Request,res:Response){
        console.log(req.body);
        await db.query('INSERT INTO usuario set ?', [req.body]);
        res.json({message:'adding user'});
    }

    public async delete(req:Request,res:Response){
        const {id} = req.params;
        await db.query('DELETE FROM usuario where idUsuario = ?',[id]);
        res.json({message:'User deleted'});
    }

    public async update(req:Request,res:Response){
        const {id} = req.params;
        await db.query('UPDATE usuario set ? where idUsuario = ?', [req.body,id]); 
        res.json({message:'User info was updated'});
    }
}

export const userController = new UserController();