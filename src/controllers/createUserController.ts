import { NextFunction, Request, Response } from "express";
import { createUserService } from "../services/createUserService";

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
    
        if(username.length <= 3) throw new Error("Invalid username.");

        const regExp = new RegExp("^(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,}).{8,}$");

        if(!regExp.test(password)) throw new Error("Invalid password.");
    
        const result = await createUserService({ username, password });
    
        return res.json(result);
        
    } catch (error) {
        next(error);
    }
};