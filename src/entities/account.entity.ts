import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transactions } from "./transaction.entity";

@Entity()
export class Accounts {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    balance: number

    @OneToMany(() => Transactions, (cashOut) => cashOut.debitedAccount)
    cashOut: Transactions[]
    
    @OneToMany(() => Transactions, (cashIn) => cashIn.creditedAccount)
    cashIn: Transactions[]
};