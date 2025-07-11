import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from '../domain/materia.entity';

@Injectable()
export class MateriaService{
  constructor(
    @InjectRepository(Materia)
    private materiaRepository: Repository<Materia>,
  ){}

  async create(materia: Materia): Promise<Materia>{
    return this.materiaRepository.save(materia);
  }

  async findAll(): Promise<Materia[]>{
    return this.materiaRepository.find();
  }

  async findOne(id: number): Promise <Materia>{
    return this.materiaRepository.findOneById(id);
  }

  async update(id: string, materia: Materia): Promise<Materia>{
    await this.materiaRepository.update(id,materia);
    return this.materiaRepository.findOneById(id);
  }

  async remove(id: string): Promise<void>{
    await this.materiaRepository.delete(id);
  }

}
