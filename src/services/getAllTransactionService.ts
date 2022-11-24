import { Transactions } from "../entities/transaction.entity";
import { accountRepository, transactionRepository } from "../repositories";

export const getAllTransactionService = async (userId: number): Promise<Transactions[]> => {

    const { id } = await accountRepository.findOneBy({id: userId});

    const transactions: Transactions[] = await transactionRepository
        .createQueryBuilder('transactions')
        .where('transactions.debitedAccountId = :id', {id})
        .orWhere('transactions.creditedAccountId = :id', {id})
        .getMany();

    return transactions;
};