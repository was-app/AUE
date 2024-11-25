import {Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Material } from './material.entity'

@Entity('materia')
export class Materia {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  difficulty: number;

  @Column()
  currentTeacher: string;

  @OneToMany(()=> Material, (material) => material.materia)
  materiais: Material[];

}