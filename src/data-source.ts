import "reflect-metadata"
import { DataSource } from "typeorm"
import { LanguageTest as CtiLanguageTest } from "./cti/LanguageTest"
import { Toiec as CtiToiec } from "./cti/Toiec"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [CtiLanguageTest, CtiToiec],
    migrations: [],
    subscribers: [],
})
