import { MateriaService } from '../services/materia.service';
import { Materia } from '../domain/materia.entity';
export declare class MateriaController {
    private readonly materiaService;
    constructor(materiaService: MateriaService);
    create(materia: Materia): Promise<Materia>;
    findAll(): Promise<Materia[]>;
    findOne(id: string): Promise<Materia>;
    update(id: string, materia: Materia): Promise<Materia>;
    remove(id: string): Promise<void>;
}
