import { Material } from './material.entity';
import { Notas } from './notas.entity';
export declare class Usuario {
    id: number;
    name: string;
    email: string;
    password: string;
    avaliacao: number;
    materiais: Material[];
    notes: Notas[];
}
