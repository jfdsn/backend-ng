import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories";
import { getBalanceService } from "../services/getBalanceService";

export const getBalanceController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username } = req.body;
    
        const result = await getBalanceService(req.userId, username);

        return res.json({balance: result});
    } catch (error) {
        next(error);
    }
};