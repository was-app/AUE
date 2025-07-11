import { Repository } from 'typeorm';
import { Material } from '../domain/material.entity';
export declare class MaterialService {
    private materialRepository;
    constructor(materialRepository: Repository<Material>);
    create(material: Material): Promise<Material>;
    findAll(): Promise<Material[]>;
    findOne(id: number): Promise<Material>;
    update(id: string, material: Material): Promise<Material>;
    remove(id: string): Promise<void>;
    findAllByUser(userId: number): Promise<Material[]>;
    findAllByCourse(courseId: number): Promise<Material[]>;
}
