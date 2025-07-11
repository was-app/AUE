import {Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Materia } from './materia.entity'
import { Usuario } from './usuario.entity'

export enum MaterialType {
  EXERCISE_LIST = 'Lista',
  PLAYLIST = 'Playlist',
  EXAM = 'Prova',
  BOOK = 'Livro',
  SLIDES = 'Slides',
  OTHER = 'Outros',
}

@Entity('material')
export class Material {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title : string;

  @Column()
  description: string;

  @Column()
  uploadDate: Date;

  @Column({
    type: 'enum',
    enum: MaterialType,
  })
  type: MaterialType;

  @Column()
  rating: number;

  @ManyToOne(() => Materia, (materia) => materia.materiais)
  materia: Materia;

  @ManyToOne(() => Usuario, (usuario) => usuario.materiais)
  usuario: Usuario;

}