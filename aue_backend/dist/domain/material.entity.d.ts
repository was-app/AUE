import { Materia } from './materia.entity';
import { Usuario } from './usuario.entity';
export declare enum MaterialType {
    EXERCISE_LIST = "Lista",
    PLAYLIST = "Playlist",
    EXAM = "Prova",
    BOOK = "Livro",
    SLIDES = "Slides",
    OTHER = "Outros"
}
export declare class Material {
    id: number;
    title: string;
    description: string;
    uploadDate: Date;
    type: MaterialType;
    rating: number;
    materia: Materia;
    usuario: Usuario;
}
