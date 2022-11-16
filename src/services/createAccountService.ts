import { Accounts } from "../entities/account.entity";
import { accountRepository } from "../repositories";

export const createAccountService = async (): Promise<Accounts> => {
    const balance = 100;
    
    const newAccount = accountRepository.create({balance: balance});
    
    await accountRepository.save(newAccount);

    return newAccount;
};