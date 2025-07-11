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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notas = void 0;
const typeorm_1 = require("typeorm");
const material_entity_1 = require("./material.entity");
const usuario_entity_1 = require("./usuario.entity");
let Notas = class Notas {
};
exports.Notas = Notas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Notas.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Notas.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Notas.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Notas.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Notas.prototype, "checked", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (user) => user.notes, { nullable: false, onDelete: 'CASCADE' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Notas.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => material_entity_1.Material),
    (0, typeorm_1.JoinTable)({
        name: 'nota_material',
        joinColumn: { name: 'notaId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'materialId', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Notas.prototype, "materials", void 0);
exports.Notas = Notas = __decorate([
    (0, typeorm_1.Entity)('notas')
], Notas);
//# sourceMappingURL=notas.entity.js.map