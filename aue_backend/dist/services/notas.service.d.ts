import { Repository } from 'typeorm';
import { Notas } from 'domain/notas.entity';
import { Usuario } from 'domain/usuario.entity';
import { Material } from 'domain/material.entity';
export declare class NotasService {
    private readonly notasRepository;
    private readonly usuarioRepository;
    private readonly materialRepository;
    constructor(notasRepository: Repository<Notas>, usuarioRepository: Repository<Usuario>, materialRepository: Repository<Material>);
    findAll(): Promise<Notas[]>;
    findByUserId(userId: number): Promise<Notas[]>;
    findOne(id: number): Promise<Notas>;
    create(createNotaData: any): Promise<Notas>;
    update(id: number, updateNotaData: any): Promise<Notas>;
    remove(id: number): Promise<void>;
}
