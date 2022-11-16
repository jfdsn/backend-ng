import { Request, Response, NextFunction, Router} from 'express';
import { createUserController } from '../controllers/createUserController';

const routes = Router();

routes.get('/status', async (req : Request, res : Response, next : NextFunction) => {
    try {
        res.send("API working");
    } catch (error) {
        next(error);
    }
});

routes.post('/user', createUserController);



export default routes;