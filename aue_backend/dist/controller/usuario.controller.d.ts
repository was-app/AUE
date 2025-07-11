import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../domain/usuario.entity';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(usuario: Usuario): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: string): Promise<Usuario>;
    update(id: string, usuario: Usuario): Promise<Usuario>;
    getProfile(userId: number): Promise<Usuario>;
    updateProfile(userId: number, updateData: Partial<Usuario>): Promise<Usuario>;
}
