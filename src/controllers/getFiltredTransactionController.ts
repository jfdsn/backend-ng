import { Request, Response, NextFunction } from "express";
import { getFiltredTransactionService } from "../services/getFiltredTransactionService";

export const getFiltredTransactionController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.userId;
        const {date, sent, received} = req.body;

        const result = await getFiltredTransactionService({userId, date, sent, received});

        return res.json(result);
    } catch (error) {
        next(error);
    }
};