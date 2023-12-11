import "reflect-metadata"
import { DataSource } from "typeorm"
import { LanguageTest as CtiLanguageTest } from "./cti/LanguageTest"
import { Toiec as CtiToiec } from "./cti/Toiec"
import { LanguageTest as StiLanguageTest } from "./sti/LanguageTest"
import { Toiec as StiToiec } from "./sti/Toiec"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [CtiLanguageTest, CtiToiec, StiLanguageTest, StiToiec],
    migrations: [],
    subscribers: [],
})
