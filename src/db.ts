import "reflect-metadata"
import { DataSource } from "typeorm"
import { UsersMigration1697823788534 } from "./migration/1697823788534-usersMigration"
import { Users } from "./models/Users"
import { CarsMigration1697973635912 } from "./migration/1697973635912-carsMigration"
import { Cars } from "./models/Cars"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "usersdb",
    entities: [Users, Cars],
    migrations: [UsersMigration1697823788534, CarsMigration1697973635912],
    synchronize: false,
    logging: false,
})
