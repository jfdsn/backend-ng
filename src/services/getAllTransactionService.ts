import { Transactions } from "../entities/transaction.entity";
import { accountRepository, transactionRepository, userRepository } from "../repositories";

export const getAllTransactionService = async (userId: number, username: string): Promise<Transactions[]> => {
    const userCheck = await userRepository.findOneBy({username: username});
    
    //Verify if token's id is equal logged user's id
    if(userCheck.id != userId) throw new Error("Unauthorized request."); 

    const { id } = await accountRepository.findOneBy({id: userCheck.accountId});

    const transactions: Transactions[] = await transactionRepository
        .createQueryBuilder('transactions')
        .where('transactions.debitedAccountId = :id', {id})
        .orWhere('transactions.creditedAccountId = :id', {id})
        .getMany();

    return transactions;
};