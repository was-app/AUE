import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../domain/usuario.entity';
import * as bcrypt from 'bcrypt';

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

  async findProfile(userId: number): Promise<Usuario> {
    const user = await this.usuarioRepository.findOne({
      where: { id: userId },
      select: ['id', 'name', 'email', 'avaliacao'],
    });
    console.log('user in find profile',user)
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }


  async updateProfile(userId: number, updateData: Partial<Usuario>): Promise<Usuario> {
    // todo check if email already exists
    const user = await this.usuarioRepository.findOne({ where: { id: userId } });
    console.log('user in update profile',user)
    console.log('updateData in find profile',updateData)
    if (!user) {
      throw new Error('User not found');
    }

    if (updateData.avaliacao !== undefined) {
      user.avaliacao = updateData.avaliacao;
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    Object.assign(user, updateData);
    return this.usuarioRepository.save(user);
  }
}

