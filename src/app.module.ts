import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { MateriaController } from './controller/materia.controller';
import { MaterialController } from './controller/material.controller';
import { UsuarioController } from './controller/usuario.controller';
import { MateriaService } from './services/materia.service';
import { MaterialService } from './services/material.service';
import { UsuarioService } from './services/usuario.service';
import { Materia } from './domain/materia.entity';
import { Material } from './domain/material.entity';
import { Usuario } from './domain/usuario.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'was',
    password: '12345678',
    database: 'aueDB',
    entities: [Usuario, Materia, Material],
    synchronize: true,
  }),
    TypeOrmModule.forFeature([Materia, Material, Usuario]),],
  controllers: [
    MateriaController,
    MaterialController,
    UsuarioController,
  ],
  providers: [
    MateriaService,
    MaterialService,
    UsuarioService,
  ],
})
export class AppModule {}
