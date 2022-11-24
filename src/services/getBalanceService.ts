import { accountRepository, userRepository } from "../repositories";

export const getBalanceService = async (userId: number): Promise<Number> => {

    const user = await userRepository.findOneBy({id: userId});

    const { balance } = await accountRepository.findOneBy({id: user.accountId})
    
    return balance;
};