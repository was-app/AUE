import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
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
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    };
  }

  async register(registerDto: { name: string, email: string; password: string }): Promise<Usuario> {
    const { name, email, password } = registerDto;
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({ name, email, password: hashedPassword });

    return await this.userRepository.save(newUser);
  }

}