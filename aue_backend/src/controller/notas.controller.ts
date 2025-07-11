import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { NotasService } from 'services/notas.service';
import { Notas } from 'domain/notas.entity';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post()
  create(@Body() body: { title: string; description: string; date: string; userId: number }): Promise<Notas> {
    return this.notasService.create(body);
  }

  @Get()
  findAll(): Promise<Notas[]> {
    return this.notasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Notas> {
    return this.notasService.findOne(+id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string): Promise<Notas[]> {
    return this.notasService.findByUserId(+userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { title: string; description: string; date: string }): Promise<Notas> {
    return this.notasService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.notasService.remove(+id);
  }
}
