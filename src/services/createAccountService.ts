import { Accounts } from "../entities/account.entity";
import { accountRepository } from "../repositories";

export const createAccountService = async (): Promise<Accounts> => {
    const balance: number = 100.0;
    
    const newAccount = accountRepository.create({balance: balance});
    
    await accountRepository.save(newAccount);

    return newAccount;
};