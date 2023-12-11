import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { LocalDate } from "../LocalDate";
import { LocalDateTransformer } from "../LocalDateTransformer";

@Entity("STI_LANGUAGE_TEST")
@TableInheritance({ column: { type: "varchar", name: "type" } })
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
