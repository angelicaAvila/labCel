import {Router} from 'express';
import {userController} from '../controllers/userController'

class UserRoutes{
    public router:Router = Router();

    constructor(){
         this.config();
    }

    config(): void{
        this.router.get('/',userController.list);
        this.router.get('/:id',userController.getOne);
        // this.router.get('/:user',userController.getByName);
        this.router.post('/',userController.create);
        this.router.delete('/:id',userController.delete);
        this.router.put('/:id',userController.update);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;