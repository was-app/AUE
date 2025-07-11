import { Material } from './material.entity';
import { Usuario } from './usuario.entity';
export declare class Notas {
    id: number;
    title: string;
    description: string;
    date: Date;
    checked: boolean;
    user: Usuario;
    materials: Material[];
}
