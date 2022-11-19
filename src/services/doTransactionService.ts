import { AppDataSource } from '../database/app-data-source'
import { Transactions } from '../entities/transaction.entity';
import { accountRepository, userRepository } from '../repositories';


type ReqTransaction = {
    userId: number
    value: number
    usernameReceiver: string
};


export const doTransactionService =
 async ({ userId, value, usernameReceiver }: ReqTransaction) => {
    const money = value;
    
    const user = await userRepository.findOneBy({id: userId});
    const userAccount = await accountRepository.findOneBy({id: user.accountId});
 
    const userReceiver = await userRepository.findOneBy({username: usernameReceiver});
    const userReceiverAccount = await accountRepository.findOneBy({id: userReceiver.accountId});
    
    if(userAccount.balance < value) throw new Error("Insuficient balance.");
    if(!userReceiver) throw new Error("User no exist.");

    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    

    //Starts a Transaction
    await queryRunner.startTransaction('READ COMMITTED');
    
    /* Try to make a transaction between 2 users.
    - If queryRunner completes the cashin/cashout operation,
    - a newTransaction is created.
    - QueryRunner updates both users account cashin or cashout Ids,
    - then commit the Transaction.
    - If fails, rollback all transaction operations.  
    */
    try {
        const newTransaction = queryRunner.manager.create(Transactions, {
            value: value,
            debitedAccountId: userAccount.id,
            creditedAccountId: userReceiverAccount.id
        });
        
        const newTransactionId = await queryRunner.manager.save(newTransaction);
        
        
        userAccount.balance = (userAccount.balance - money);
        userReceiverAccount.balance = (1*userReceiverAccount.balance + money);
        console.log(newTransactionId.id);
        userAccount.cashOutId.push(newTransactionId.id);
        userReceiverAccount.cashInId.push(newTransactionId.id);

        await queryRunner.manager.save(userAccount);
        await queryRunner.manager.save(userReceiverAccount);

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
        console.log(error);
    } finally {
        await queryRunner.release();   
    }
};