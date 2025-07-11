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
exports.MateriaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const materia_entity_1 = require("../domain/materia.entity");
let MateriaService = class MateriaService {
    constructor(materiaRepository) {
        this.materiaRepository = materiaRepository;
    }
    async create(materia) {
        return this.materiaRepository.save(materia);
    }
    async findAll() {
        return this.materiaRepository.find();
    }
    async findOne(id) {
        return this.materiaRepository.findOneById(id);
    }
    async update(id, materia) {
        await this.materiaRepository.update(id, materia);
        return this.materiaRepository.findOneById(id);
    }
    async remove(id) {
        await this.materiaRepository.delete(id);
    }
};
exports.MateriaService = MateriaService;
exports.MateriaService = MateriaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(materia_entity_1.Materia)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MateriaService);
//# sourceMappingURL=materia.service.js.map