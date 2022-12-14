import { Request, Response, NextFunction } from "express";
import { doTransactionService } from "../services/doTransactionService";



export const doTransactionController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;
        const { value, usernameReceiver } = req.body;
        const valor = parseFloat(value);

        await doTransactionService({userId, valor, usernameReceiver});
        
        return res.sendStatus(201);
    } catch (error) {
        next(error);
    }

};