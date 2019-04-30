import {Router} from 'express';
import {authController} from '../controllers/authController'

class AuthRoutes{
    public router:Router = Router();

    constructor(){
         this.config();
    }

    config(): void{
        this.router.post('/',authController.login);
        this.router.get('/:id',authController.one);
        // this.router.get('/:user',userController.getByName );
        
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;