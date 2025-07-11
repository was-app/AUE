import { LoginService } from '../services/login.service';
import { Usuario } from '../domain/usuario.entity';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(loginCredentiais: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    }>;
    register(registerDto: {
        name: string;
        email: string;
        password: string;
    }): Promise<Usuario>;
}
