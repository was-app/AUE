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
exports.Material = exports.MaterialType = void 0;
const typeorm_1 = require("typeorm");
const materia_entity_1 = require("./materia.entity");
const usuario_entity_1 = require("./usuario.entity");
var MaterialType;
(function (MaterialType) {
    MaterialType["EXERCISE_LIST"] = "Lista";
    MaterialType["PLAYLIST"] = "Playlist";
    MaterialType["EXAM"] = "Prova";
    MaterialType["BOOK"] = "Livro";
    MaterialType["SLIDES"] = "Slides";
    MaterialType["OTHER"] = "Outros";
})(MaterialType || (exports.MaterialType = MaterialType = {}));
let Material = class Material {
};
exports.Material = Material;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Material.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Material.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Material.prototype, "uploadDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: MaterialType,
    }),
    __metadata("design:type", String)
], Material.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Material.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => materia_entity_1.Materia, (materia) => materia.materiais),
    __metadata("design:type", materia_entity_1.Materia)
], Material.prototype, "materia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.materiais),
    __metadata("design:type", usuario_entity_1.Usuario)
], Material.prototype, "usuario", void 0);
exports.Material = Material = __decorate([
    (0, typeorm_1.Entity)('material')
], Material);
//# sourceMappingURL=material.entity.js.map