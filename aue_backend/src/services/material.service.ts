import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from '../domain/material.entity';

@Injectable()
export class MaterialService{
  constructor(
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
  ){}

  async create(material: Material): Promise<Material>{
    return this.materialRepository.save(material);
  }

  async findAll(): Promise<Material[]>{
    return this.materialRepository.find();
  }

  async findOne(id: number): Promise <Material>{
    return this.materialRepository.findOneById(id);
  }

  async update(id: string, material: Material): Promise<Material>{
    await this.materialRepository.update(id,material);
    return this.materialRepository.findOneById(id)
  }

  async remove(id: string): Promise<void>{
    await this.materialRepository.delete(id);
  }

  async findAllByUser(userId: number): Promise<Material[]> {
    return this.materialRepository.find({
      where: {
        usuario: { id: userId },
      },
      relations: ['usuario', 'materia'],
    });
  }

  async findAllByCourse(courseId: number): Promise<Material[]> {
    return this.materialRepository.find({
      where: {
        materia: { id: courseId }, // Filtering by course (Materia) ID
      },
      relations: ['materia', 'usuario'], // You can load related entities as needed
    });
  }
}
