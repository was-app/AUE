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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("../domain/usuario.entity");
const bcrypt = require("bcrypt");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async create(usuario) {
        return this.usuarioRepository.save(usuario);
    }
    async findAll() {
        return this.usuarioRepository.find();
    }
    async findOne(id) {
        return this.usuarioRepository.findOneById(id);
    }
    async update(id, usuario) {
        await this.usuarioRepository.update(id, usuario);
        return this.usuarioRepository.findOneById(id);
    }
    async remove(id) {
        await this.usuarioRepository.delete(id);
    }
    async findProfile(userId) {
        const user = await this.usuarioRepository.findOne({
            where: { id: userId },
            select: ['id', 'name', 'email', 'avaliacao'],
        });
        console.log('user in find profile', user);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    async updateProfile(userId, updateData) {
        const user = await this.usuarioRepository.findOne({ where: { id: userId } });
        console.log('user in update profile', user);
        console.log('updateData in find profile', updateData);
        if (!user) {
            throw new Error('User not found');
        }
        if (updateData.avaliacao !== undefined) {
            user.avaliacao = updateData.avaliacao;
        }
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        Object.assign(user, updateData);
        return this.usuarioRepository.save(user);
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map