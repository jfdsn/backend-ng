import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Accounts } from "./account.entity";

@Entity()
export class Transactions {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: number

    @ManyToOne(() => Accounts, (account) => account.cashOut)
    debitedAccount: Accounts
    
    @ManyToOne(() => Accounts, (account) => account.cashIn)
    creditedAccount: Accounts

    @CreateDateColumn()
    created_at: Date
};