import { NextFunction, Request, Response } from "express";
import { createUserService } from "../services/createUserService";

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
    
        if(username.length <= 3) return new Error("Invalid username.");
        
        if(password.length < 8) return new Error("Invalid password.");
    
        const result = await createUserService({ username, password });
    
        if(result instanceof Error) return res.status(400).json(result.message);
    
        return res.json(result);
        
    } catch (error) {
        next(error);
    }
};