import { NotasService } from 'services/notas.service';
import { Notas } from 'domain/notas.entity';
export declare class NotasController {
    private readonly notasService;
    constructor(notasService: NotasService);
    create(body: {
        title: string;
        description: string;
        date: string;
        userId: number;
    }): Promise<Notas>;
    findAll(): Promise<Notas[]>;
    findOne(id: string): Promise<Notas>;
    findByUserId(userId: string): Promise<Notas[]>;
    update(id: string, body: {
        title: string;
        description: string;
        date: string;
    }): Promise<Notas>;
    remove(id: string): Promise<void>;
}
