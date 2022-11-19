import { Request, Response, NextFunction } from "express";
import { getAllTransactionService } from "../services/getAllTransactionService";

export const getAllTransactionController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username } = req.body;
    
        const result = await getAllTransactionService(req.userId, username);

        return res.json(result);
    } catch (error) {
        next(error);
    }
};