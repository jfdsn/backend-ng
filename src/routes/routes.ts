import { Request, Response, NextFunction, Router} from 'express';

const routes = Router();

routes.get('/status', async (req : Request, res : Response, next : NextFunction) => {
    try {
        res.send("API working");
    } catch (error) {
        next(error);
    }
});



export default routes;