import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from '../domain/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Usuario>{
    const user = await this.userRepository.findOne({where: {email}});
    if (user && (await bcrypt.compare(password, user.password)))
      return user;
    throw new UnauthorizedException('Credenciais Inválidas')
  }

  async login(user: Usuario){
    const payload = {email: user.email, sub: user.id};
    return{
      access_token: this.jwtService.sign(payload),
    };
  }
}