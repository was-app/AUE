import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {MateriaService} from '../services/materia.service';
import {Materia} from '../domain/materia.entity';


@Controller('/materias')
export class MateriaController {

  constructor(private readonly materiaService: MateriaService) {}

  @Post()
  async create(@Body() materia: Materia): Promise <Materia>{
    return this.materiaService.create(materia);
  }

  @Get()
  async findAll(): Promise<Materia[]> {
    return this.materiaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Materia>{
    return this.materiaService.findOne(Number(id))
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() materia: Materia): Promise<Materia>{
    return this.materiaService.update(id,materia)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void>{
    return this.materiaService.remove(id);
  }

}