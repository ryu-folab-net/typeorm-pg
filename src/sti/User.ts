import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("STI_USER")
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string;

}
