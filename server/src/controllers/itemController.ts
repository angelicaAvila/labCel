import {Request, Response} from 'express';

import db from '../database'

class ItemController{

    public async list (req:Request,res:Response){ 
       const items = await db.query('SELECT * FROM producto');
        res.json(items);
    }
   
    //gets by id
    public async getOne (req:Request,res:Response){ 
        const { id } = req.params;
        const item = await db.query('SELECT * FROM producto where idProducto = ?', [id]);
        if (item.length > 0){
            return res.json(item[0]);
        }
        res.status(404).json({text: 'Item not found'});
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
        await db.query('INSERT INTO producto set ?', [req.body]);
        res.json({message:'adding item'});
    }

    public async delete(req:Request,res:Response){
        const {id} = req.params;
        await db.query('DELETE FROM producto where idProducto = ?',[id]);
        res.json({message:'Item deleted'});
    }

    public async update(req:Request,res:Response){
        const {id} = req.params;
        await db.query('UPDATE producto set ? where idProducto = ?', [req.body,id]); 
        res.json({message:'Item info was updated'});
    }
}

export const itemController = new ItemController();