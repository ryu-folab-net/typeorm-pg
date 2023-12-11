import "reflect-metadata"
import { DataSource } from "typeorm"
import { LanguageTest as CtiLanguageTest } from "./cti/LanguageTest"
import { Toiec as CtiToiec } from "./cti/Toiec"
import { User as CtiUser } from "./cti/User"
import { LanguageTest as StiLanguageTest } from "./sti/LanguageTest"
import { Toiec as StiToiec } from "./sti/Toiec"
import { User as StiUser } from "./sti/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [
      CtiLanguageTest, 
      CtiToiec, 
      CtiUser,
      StiLanguageTest, 
      StiToiec,
      StiUser,
    ],
    migrations: [],
    subscribers: [],
})
