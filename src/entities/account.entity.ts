import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Transactions } from "./transaction.entity";

@Entity()
export class Accounts {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "decimal", precision: 10, scale: 2})
    balance: number

    @Column("int", { array: true, default: "{}"})
    cashOutId: number[]

    @Column("int", { array: true, default: "{}"})
    cashInId: number[]
    
    @OneToMany(() => Transactions, (cashOut) => cashOut.debitedAccount)
    cashOut: Transactions[]
    
    @OneToMany(() => Transactions, (cashIn) => cashIn.creditedAccount)
    cashIn: Transactions[]
};