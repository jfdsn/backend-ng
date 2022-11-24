import { Transactions } from "../entities/transaction.entity";
import { accountRepository, transactionRepository } from "../repositories";



export const getFiltredTransactionService = async ({userId, date, sent, received}) => {
    const { id } = await accountRepository.findOneBy({id: userId});

    console.log({date, sent, received})

   try {
       if(date !== ""){
            if(sent && !received) {
                const transactions: Transactions[] = await transactionRepository
                    .createQueryBuilder('transactions')
                    .where('transactions.created_at = :date', {date})
                    .andWhere('transactions.debitedAccountId = :id', {id})
                    .getMany();
            
                return transactions;
            } else if(!sent && received) {
                const transactions: Transactions[] = await transactionRepository
                    .createQueryBuilder('transactions')
                    .where('transactions.created_at = :date', {date})
                    .andWhere('transactions.creditedAccountId = :id', {id})
                    .getMany();
        
                return transactions;
            } else {
                const transactions: Transactions[] = await transactionRepository
                    .createQueryBuilder('transactions')
                    .where('transactions.created_at = :date', {date})
                    .andWhere('transactions.debitedAccountId = :id', {id})
                    .orWhere('transactions.creditedAccountId = :id', {id})
                    .getMany();
    
                return transactions;
            }
       } else if (date == "") {
            if(sent && !received) {
                const transactions: Transactions[] = await transactionRepository
                    .createQueryBuilder('transactions')
                    .where('transactions.debitedAccountId = :id', {id})
                    .getMany();
            
                return transactions;
            } else if(!sent && received) {
                const transactions: Transactions[] = await transactionRepository
                    .createQueryBuilder('transactions')
                    .where('transactions.creditedAccountId = :id', {id})
                    .getMany();
        
                return transactions;
            } else {
                const transactions: Transactions[] = await transactionRepository
                    .createQueryBuilder('transactions')
                    .where('transactions.debitedAccountId = :id', {id})
                    .orWhere('transactions.creditedAccountId = :id', {id})
                    .getMany();

                return transactions;
            }
       } else {
            return [];
       }
   } catch (error) {
        console.log(error);
   }       
};