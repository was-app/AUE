import { Repository } from 'typeorm';
import { Usuario } from '../domain/usuario.entity';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<Usuario>);
    create(usuario: Usuario): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    update(id: string, usuario: Usuario): Promise<Usuario>;
    remove(id: string): Promise<void>;
    findProfile(userId: number): Promise<Usuario>;
    updateProfile(userId: number, updateData: Partial<Usuario>): Promise<Usuario>;
}
