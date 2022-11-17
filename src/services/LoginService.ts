import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { userRepository } from "../repositories";

type UserReq = {
    username: string
    password: string
};

export const LoginService = async ({ username, password}: UserReq) => {
    const userExist = await userRepository.findOneBy({username: username});

    if(!userExist) throw new Error("User or Password incorrect.");
    
    const comparePassword = await compare(password, userExist.password);
    
    if(!comparePassword) throw new Error("User or Password incorrect.");

    const token = sign({}, 'My_salty', {subject: userExist.id.toString(), expiresIn: '24h'}); //TODO arrumar secret word para .env

    return { token }
};