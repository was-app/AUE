import {Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Material } from './material.entity';
import { Notas } from './notas.entity';
import * as bcrypt from 'bcrypt';

@Entity('usuario')
export class Usuario {

  @PrimaryGeneratedColumn({name: 'usuario_id'})
  id: number;

  @Column()
  name : string;

  @Column({unique: true})
  email : string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avaliacao : number;

  @OneToMany(() => Material, (material) => material.usuario, { nullable: true })
  materiais: Material[];

  @OneToMany(() => Notas, (nota) => nota.user, { cascade: true }) 
  notes: Notas[];

}