import { Request, Response, NextFunction, Router} from 'express';
import { createUserController } from '../controllers/createUserController';
import { doTransactionController } from '../controllers/doTransactionController';
import { getAllTransactionController } from '../controllers/getAllTransactionController';
import { getBalanceController } from '../controllers/getBalanceController';
import { getFiltredTransactionController } from '../controllers/getFiltredTransactionController';
import { LoginController } from '../controllers/LoginController';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';


const routes = Router();

routes.get('/status', async (req : Request, res : Response, next : NextFunction) => {
    try {
        res.send("API working");
    } catch (error) {
        next(error);
    }
});


routes.post('/user', createUserController); //Body: username, password
routes.post('/login', LoginController); //Body: username, password

routes.get('/balance', authorizationMiddleware, getBalanceController); 
routes.post('/transaction', authorizationMiddleware, doTransactionController); //Body: value, usernameReceiver
routes.get('/alltransactions', authorizationMiddleware, getAllTransactionController);
routes.post('/filter', authorizationMiddleware, getFiltredTransactionController);//Body: date,sent,received

export default routes;