import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { LocalDate } from "../LocalDate";
import { LocalDateTransformer } from "../LocalDateTransformer";
import { User } from "./User";

@Entity("STI_LANGUAGE_TEST")
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class LanguageTest {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => User)
  user: User;

  @Column({
    type: 'varchar',
    transformer: new LocalDateTransformer(),
  })
  examDate: LocalDate;

  @Column()
  publOrg: string;

}
