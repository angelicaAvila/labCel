import {Router} from 'express';
import {itemController} from '../controllers/itemController';

class ItemRoutes{
    public router:Router = Router();

    constructor(){
         this.config();
    }

    config(): void{
        this.router.get('/',itemController.list);
        this.router.get('/:id',itemController.getOne);
        // this.router.get('/:user',userController.getByName);
        this.router.post('/',itemController.create);
        this.router.delete('/:id',itemController.delete);
        this.router.put('/:id',itemController.update);
    }
}

const itemRoutes = new ItemRoutes();
export default itemRoutes.router;