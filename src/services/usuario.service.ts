import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../domain/usuario.entity';

@Injectable()
export class UsuarioService{
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ){}

  async create(usuario: Usuario): Promise<Usuario>{
    return this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]>{
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise <Usuario>{
    return this.usuarioRepository.findOneById(id);
  }

  async update(id: string, usuario: Usuario): Promise<Usuario>{
    await this.usuarioRepository.update(id,usuario);
    return this.usuarioRepository.findOneById(id);
  }

  async remove(id: string): Promise<void>{
    await this.usuarioRepository.delete(id);
  }

}

