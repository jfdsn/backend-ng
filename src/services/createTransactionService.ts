import { transactionRepository } from "../repositories";
import { Transactions } from "../entities/transaction.entity";


export const createTransactionService = 
    async (value: number, debitedAccountId: number, creditedAccountId: number): Promise<Transactions> => {
        
        const newTransaction = transactionRepository
            .create(
                {value: value, debitedAccountId: debitedAccountId, creditedAccountId: creditedAccountId}
            );  
        
        await transactionRepository.save(newTransaction);

        return newTransaction;
};