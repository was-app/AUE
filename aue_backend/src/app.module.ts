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
import { Notas } from 'domain/notas.entity';
import { LoginModule } from './modules/login.module';
import { NotasController } from 'controller/notas.controller';
import { NotasService } from 'services/notas.service';

@Module({
  imports: [
    LoginModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'was',
    password: '12345678',
    database: 'auedb',
    entities: [Usuario, Materia, Material, Notas],
    synchronize: true,
  }),
    TypeOrmModule.forFeature([Materia, Material, Usuario, Notas]),
  ],
  controllers: [
    MateriaController,
    MaterialController,
    UsuarioController,
    NotasController,
  ],
  providers: [
    MateriaService,
    MaterialService,
    UsuarioService,
    NotasService,
  ],
})
export class AppModule {}
