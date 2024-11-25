import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {MaterialService} from '../services/material.service';
import {Material} from '../domain/material.entity';


@Controller('/materiais')
export class MaterialController {

  constructor(private readonly materialService: MaterialService) {}

  @Post()
  async create(@Body() material: Material): Promise <Material>{
    return this.materialService.create(material);
  }

  @Get()
  async findAll(): Promise<Material[]> {
    return this.materialService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Material>{
    return this.materialService.findOne(Number(id))
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() material: Material): Promise<Material>{
    return this.materialService.update(id,material)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void>{
    return this.materialService.remove(id);
  }

}