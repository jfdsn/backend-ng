import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Accounts } from "./account.entity";

@Entity()
export class Transactions {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "decimal", precision: 10, scale: 2})
    value: number

    @Column({nullable: true})
    debitedAccountId: number
    
    @Column({nullable: true})
    creditedAccountId: number

    @ManyToOne(() => Accounts, (account) => account.cashOut)
    debitedAccount: Accounts
    
    @ManyToOne(() => Accounts, (account) => account.cashIn)
    creditedAccount: Accounts

    @CreateDateColumn({type:'date'})
    created_at: string
};