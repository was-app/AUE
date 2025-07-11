import { JwtService } from '@nestjs/jwt';
import { Usuario } from '../domain/usuario.entity';
import { Repository } from 'typeorm';
export declare class LoginService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<Usuario>, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<Usuario>;
    login(user: Usuario): Promise<{
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
