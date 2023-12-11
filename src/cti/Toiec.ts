import { Column, Entity } from "typeorm";
import { LanguageTest } from "./LanguageTest";

@Entity("CTI_TOIEC")
export class Toiec extends LanguageTest {

  @Column()
  reading: number;

  @Column()
  listening: number;

}
