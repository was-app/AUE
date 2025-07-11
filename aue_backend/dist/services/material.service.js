"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const material_entity_1 = require("../domain/material.entity");
let MaterialService = class MaterialService {
    constructor(materialRepository) {
        this.materialRepository = materialRepository;
    }
    async create(material) {
        return this.materialRepository.save(material);
    }
    async findAll() {
        return this.materialRepository.find();
    }
    async findOne(id) {
        return this.materialRepository.findOneById(id);
    }
    async update(id, material) {
        await this.materialRepository.update(id, material);
        return this.materialRepository.findOneById(id);
    }
    async remove(id) {
        await this.materialRepository.delete(id);
    }
    async findAllByUser(userId) {
        return this.materialRepository.find({
            where: {
                usuario: { id: userId },
            },
            relations: ['usuario', 'materia'],
        });
    }
    async findAllByCourse(courseId) {
        return this.materialRepository.find({
            where: {
                materia: { id: courseId },
            },
            relations: ['materia', 'usuario'],
        });
    }
};
exports.MaterialService = MaterialService;
exports.MaterialService = MaterialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MaterialService);
//# sourceMappingURL=material.service.js.map