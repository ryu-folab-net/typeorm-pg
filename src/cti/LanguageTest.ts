import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LocalDateTransformer } from "../LocalDateTransformer";
import { LocalDate } from "../LocalDate";
import { User } from "./User";

@Entity("CTI_LANGUAGE_TEST")
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
