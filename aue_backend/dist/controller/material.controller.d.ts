import { MaterialService } from '../services/material.service';
import { Material } from '../domain/material.entity';
export declare class MaterialController {
    private readonly materialService;
    constructor(materialService: MaterialService);
    create(material: Material): Promise<Material>;
    findAll(): Promise<Material[]>;
    findOne(id: string): Promise<Material>;
    update(id: string, material: Material): Promise<Material>;
    remove(id: string): Promise<void>;
}
