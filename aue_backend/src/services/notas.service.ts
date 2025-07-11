import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Notas } from 'domain/notas.entity';
import { Usuario } from 'domain/usuario.entity';
import { Material } from 'domain/material.entity';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Notas)
    private readonly notasRepository: Repository<Notas>,
    
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    
    @InjectRepository(Material)
    private readonly materialRepository: Repository<Material>,
  ) {}

  async findAll(): Promise<Notas[]> {
    return this.notasRepository.find({
      relations: ['user', 'materials'],
    });
  }

  async findByUserId(userId: number): Promise<Notas[]> {
    const user = await this.usuarioRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.notasRepository.find({
      where: { user: { id: userId } },
      relations: ['user', 'materials'],
    });
  }

  async findOne(id: number): Promise<Notas> {
    const note = await this.notasRepository.findOne({
      where: { id },
      relations: ['user', 'materials'],
    });

    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }

    return note;
  }

  async create(createNotaData: any): Promise<Notas> {
    console.log(createNotaData)
    const { title, description, date, userId, materialIds, checked } = createNotaData;

    const user = await this.usuarioRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    const materials = materialIds && materialIds.length > 0 ? await this.materialRepository.findByIds(materialIds) : [];

    const nota = this.notasRepository.create({
      title,
      description,
      date,
      user,
      materials,
      checked,
    });

    return this.notasRepository.save(nota);
  }

  async update(id: number, updateNotaData: any): Promise<Notas> {
    const { title, description, date, userId, materialIds, checked } = updateNotaData;

    const note = await this.findOne(id);

    if (userId) {
      const user = await this.usuarioRepository.findOne({ where: { id: userId } });
      if (!user) {
        throw new NotFoundException(`User with ID ${userId} not found`);
      }
      note.user = user;
    }

    if (materialIds) {
      const materials = await this.materialRepository.findByIds(materialIds);
      note.materials = materials;
    }

    note.title = title || note.title;
    note.description = description || note.description;
    note.date = date || note.date;
    note.checked = checked || note.checked;

    return this.notasRepository.save(note);
  }

  async remove(id: number): Promise<void> {
    const note = await this.findOne(id);
    await this.notasRepository.remove(note);
  }
}
