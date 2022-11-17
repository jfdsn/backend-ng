import { NextFunction, Request, Response } from "express";
import { LoginService } from "../services/LoginService";


export const LoginController = async (req: Request, res: Response, next: NextFunction) => {    
    try {
        const { username, password } = req.body;
    
        const result = await LoginService({ username, password });
        
        return res.json(result);   
    } catch (error) {
        next(error);
    }
};