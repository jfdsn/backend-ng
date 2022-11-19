import { NextFunction, Request, Response } from "express";


export default (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error.message == "Invalid username." || error.message == "Invalid password."){
        console.log("Invalid username or password.");
        res.sendStatus(400).end()
    } else if (error.message == "User already exists."){
        console.log("User already exists.")
        res.sendStatus(409).end();
    } else if(error.message == "User or Password incorrect."){
        console.log("User or Password incorrect.");
        res.sendStatus(400).end();
    } else if(error.message == "Authorization is missing." || error.message == "Token is missing."){
        console.log("Authorization or Token missing.");
        res.sendStatus(401).end();
    } else if(error.message == "Insuficient balance." || error.message == "User no exist."){
        console.log("Insuficient balance or wrong username.");
        res.sendStatus(400).end();
    } else if(error.message == "Unauthorized request."){
        console.log("Unauthorized request.");    
        res.sendStatus(401).end();
    } else {
        console.log("Intern error.");
        res.sendStatus(500).end();
    }
}