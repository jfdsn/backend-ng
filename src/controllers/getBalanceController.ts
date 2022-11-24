import { Request, Response, NextFunction } from "express";
import { getBalanceService } from "../services/getBalanceService";

export const getBalanceController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getBalanceService(req.userId);

        return res.json({balance: result});
    } catch (error) {
        console.log(error);
        next(error);
    }
};