import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { LocalDateTransformer } from "../LocalDateTransformer";
import { LocalDate } from "../LocalDate";

@Entity("CTI_LANGUAGE_TEST")
export class LanguageTest {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    transformer: new LocalDateTransformer(),
  })
  examDate: LocalDate;

  @Column()
  publOrg: string;

}
