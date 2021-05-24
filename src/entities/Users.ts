import {
    Entity, Column, PrimaryGeneratedColumn, OneToMany,
    BaseEntity } from 'typeorm';
import { ToDos } from "./ToDos";

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => ToDos, todo => todo.id)
    ToDos: ToDos[];
}