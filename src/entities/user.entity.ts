import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Accounts } from "./account.entity";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    username: string

    @Column({type: 'text'})
    password: string

    @Column()
    accountId: number

    @OneToOne(() => Accounts)
    @JoinColumn()
    account: Accounts
};