import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

export const authorizationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeaders = req.headers.authorization;
        
        if (!authHeaders) throw new Error("Authorization is missing.");
        
        const [, token] = authHeaders.split(" ");
        
        if(!token) throw new Error("Token is missing.");

        verify(token, 'My_salty')
  
        const { sub } = decode(token);
        req.userId = parseInt(sub.toString());
        
        next();
    } catch (error) {
        next(error);   
    }
};