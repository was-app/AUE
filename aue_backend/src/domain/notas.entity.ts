import {Column, Entity, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Material } from './material.entity'
import { Usuario } from './usuario.entity'

@Entity('notas')
export class Notas {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title : string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  checked: boolean;

  @ManyToOne(() => Usuario, (user) => user.notes, { nullable: false, onDelete: 'CASCADE' })
  user: Usuario;

  @ManyToMany(() => Material)
  @JoinTable({
    name: 'nota_material',
    joinColumn: { name: 'notaId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'materialId', referencedColumnName: 'id' },
  })
  materials: Material[];
}