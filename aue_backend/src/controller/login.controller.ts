import {Controller, Post, Body} from '@nestjs/common';
import {LoginService} from '../services/login.service'
import {Usuario} from '../domain/usuario.entity'

@Controller('auth')
export class LoginController{
  constructor(private readonly loginService: LoginService){}

  @Post('login')
  async login(@Body() loginCredentiais : {email: string; password: string}){
    const user = await this.loginService.validateUser(loginCredentiais.email,loginCredentiais.password)
    return this.loginService.login(user);
  }

  @Post('register')
  async register(@Body() registerDto: { name: string; email: string; password: string }): Promise<Usuario> {
    return this.loginService.register(registerDto);
  }
}