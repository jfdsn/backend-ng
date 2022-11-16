import { userRepository } from "../repositories";
import { Users } from "../entities/user.entity";
import { hash } from "bcrypt";
import { createAccountService } from "./createAccountService";

type UserReq = {
    username: string
    password: string
};

export const createUserService = async ({ username, password }: UserReq): Promise<Error | Users> => {
    const userExist = await userRepository.findOneBy({username: username});
    
    if(userExist) return new Error("User already exists");
    
    const passwordHashed = await hash(password, 8);
    const accountId = await createAccountService();
    
    const newUser = userRepository.create({username: username, password: passwordHashed, account: accountId});

    await userRepository.save(newUser);
    
    return newUser;
};


