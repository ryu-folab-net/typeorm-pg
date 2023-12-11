import { ChildEntity, Column } from "typeorm";
import { LanguageTest } from "./LanguageTest";

@ChildEntity("STI_TOIEC")
export class Toiec extends LanguageTest {

  @Column()
  reading: number;

  @Column()
  listening: number;

}
