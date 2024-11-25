import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../domain/usuario.entity';
import { LoginService } from '../services/login.service';
import { LoginController } from '../controller/login.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    PassportModule,
    JwtModule.register({
      //Have to update this logic later, to be more secure
      secret: 'e23f6e95a2539343adbfce26505fd1796a266c9441a45eaa0341797e04a89741c3f881b0f2cc2f3b81f59ab9dd2c4e007355cd6037aecb218dfda4da9a68f335',
      signOptions: {expiresIn: '24h'},
    }),
  ],
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule{}