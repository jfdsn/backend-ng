import { transactionRepository } from "../repositories";
import { Transactions } from "../entities/transaction.entity";
import { Accounts } from "../entities/account.entity";

type TransactionsReq = {
    value: number
    debitedAccount: Accounts
    creditedAccount: Accounts
};

export const createTransactionService = 
    async ({ value, debitedAccount, creditedAccount }: TransactionsReq): Promise<Transactions> => {
        
        const newTransaction = transactionRepository
            .create({value: value, debitedAccount: debitedAccount, creditedAccount: creditedAccount});  
        
        await transactionRepository.save(newTransaction); 

        return newTransaction;
};