import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "../entities/user.entity";
import { Accounts } from "../entities/account.entity";
import { Transactions } from "../entities/transaction.entity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    entities: [Users, Accounts, Transactions],
    logging: true,
    synchronize: true,
});