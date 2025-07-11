import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsuarioService} from '../services/usuario.service';
import {Usuario} from '../domain/usuario.entity';

@Controller('/usuarios')
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() usuario: Usuario): Promise <Usuario>{
    return this.usuarioService.create(usuario);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuario>{
    return this.usuarioService.findOne(Number(id))
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() usuario: Usuario): Promise<Usuario>{
    return this.usuarioService.update(id,usuario)
  }

  @Get('/profile/:userId')
  async getProfile(@Param('userId') userId: number): Promise<Usuario> {
    return this.usuarioService.findProfile(userId);
  }

  @Put('/profile/:userId')
  async updateProfile(
    @Param('userId') userId: number,
    @Body() updateData: Partial<Usuario>,
  ): Promise<Usuario> {
    return this.usuarioService.updateProfile(userId, updateData);
  }

}