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
exports.MateriaController = void 0;
const common_1 = require("@nestjs/common");
const materia_service_1 = require("../services/materia.service");
const materia_entity_1 = require("../domain/materia.entity");
let MateriaController = class MateriaController {
    constructor(materiaService) {
        this.materiaService = materiaService;
    }
    async create(materia) {
        return this.materiaService.create(materia);
    }
    async findAll() {
        return this.materiaService.findAll();
    }
    async findOne(id) {
        return this.materiaService.findOne(Number(id));
    }
    async update(id, materia) {
        return this.materiaService.update(id, materia);
    }
    async remove(id) {
        return this.materiaService.remove(id);
    }
};
exports.MateriaController = MateriaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [materia_entity_1.Materia]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, materia_entity_1.Materia]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MateriaController.prototype, "remove", null);
exports.MateriaController = MateriaController = __decorate([
    (0, common_1.Controller)('/materias'),
    __metadata("design:paramtypes", [materia_service_1.MateriaService])
], MateriaController);
//# sourceMappingURL=materia.controller.js.map