import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("CTI_USER")
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string;

}
