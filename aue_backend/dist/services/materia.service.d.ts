import { Repository } from 'typeorm';
import { Materia } from '../domain/materia.entity';
export declare class MateriaService {
    private materiaRepository;
    constructor(materiaRepository: Repository<Materia>);
    create(materia: Materia): Promise<Materia>;
    findAll(): Promise<Materia[]>;
    findOne(id: number): Promise<Materia>;
    update(id: string, materia: Materia): Promise<Materia>;
    remove(id: string): Promise<void>;
}
