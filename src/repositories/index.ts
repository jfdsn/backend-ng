import { AppDataSource } from "../database/app-data-source";
import { Users } from "../entities/user.entity";
import { Accounts } from "../entities/account.entity";
import { Transactions } from "../entities/transaction.entity";


export const userRepository = AppDataSource.getRepository(Users);

export const accountRepository = AppDataSource.getRepository(Accounts);

export const transactionRepository = AppDataSource.getRepository(Transactions);