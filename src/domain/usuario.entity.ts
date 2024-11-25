import {Column, Entity, OneToMany, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Material } from './material.entity'
import * as bcrypt from 'bcrypt'

@Entity('usuario')
export class Usuario {

  @PrimaryGeneratedColumn({name: 'usuario_id'})
  id: number;

  @Column()
  name : string;

  @Column({unique: true})
  email : string

  @Column()
  password: string

  @Column()
  avaliacao : number

  @OneToMany(() => Material, (material) => material.usuario)
  materiais: Material[];

  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password,10)
  }

}