import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, 
  BaseEntity } from 'typeorm';
import { Users } from "./Users";

@Entity()
export class ToDos extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  done: boolean;

  @ManyToOne(() => Users, user => user.id)
  Users: Users;
}