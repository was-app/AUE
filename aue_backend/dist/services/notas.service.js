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
exports.NotasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notas_entity_1 = require("../domain/notas.entity");
const usuario_entity_1 = require("../domain/usuario.entity");
const material_entity_1 = require("../domain/material.entity");
let NotasService = class NotasService {
    constructor(notasRepository, usuarioRepository, materialRepository) {
        this.notasRepository = notasRepository;
        this.usuarioRepository = usuarioRepository;
        this.materialRepository = materialRepository;
    }
    async findAll() {
        return this.notasRepository.find({
            relations: ['user', 'materials'],
        });
    }
    async findByUserId(userId) {
        const user = await this.usuarioRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        return this.notasRepository.find({
            where: { user: { id: userId } },
            relations: ['user', 'materials'],
        });
    }
    async findOne(id) {
        const note = await this.notasRepository.findOne({
            where: { id },
            relations: ['user', 'materials'],
        });
        if (!note) {
            throw new common_1.NotFoundException(`Note with ID ${id} not found`);
        }
        return note;
    }
    async create(createNotaData) {
        console.log(createNotaData);
        const { title, description, date, userId, materialIds, checked } = createNotaData;
        const user = await this.usuarioRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        const materials = materialIds && materialIds.length > 0 ? await this.materialRepository.findByIds(materialIds) : [];
        const nota = this.notasRepository.create({
            title,
            description,
            date,
            user,
            materials,
            checked,
        });
        return this.notasRepository.save(nota);
    }
    async update(id, updateNotaData) {
        const { title, description, date, userId, materialIds, checked } = updateNotaData;
        const note = await this.findOne(id);
        if (userId) {
            const user = await this.usuarioRepository.findOne({ where: { id: userId } });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${userId} not found`);
            }
            note.user = user;
        }
        if (materialIds) {
            const materials = await this.materialRepository.findByIds(materialIds);
            note.materials = materials;
        }
        note.title = title || note.title;
        note.description = description || note.description;
        note.date = date || note.date;
        note.checked = checked || note.checked;
        return this.notasRepository.save(note);
    }
    async remove(id) {
        const note = await this.findOne(id);
        await this.notasRepository.remove(note);
    }
};
exports.NotasService = NotasService;
exports.NotasService = NotasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notas_entity_1.Notas)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], NotasService);
//# sourceMappingURL=notas.service.js.map