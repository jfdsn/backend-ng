import { accountRepository, userRepository } from "../repositories";

export const getBalanceService = async (userId: number, username: string): Promise<Number> => {
    const userCheck = await userRepository.findOneBy({username: username});
    
    //Verify if token's id is equal logged user's id
    if(userCheck.id != userId) throw new Error(); 

    const user = await userRepository.findOneBy({id: userId});

    const { balance } = await accountRepository.findOneBy({id: user.accountId})
    
    return balance;
};