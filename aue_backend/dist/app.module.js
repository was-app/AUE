"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const materia_controller_1 = require("./controller/materia.controller");
const material_controller_1 = require("./controller/material.controller");
const usuario_controller_1 = require("./controller/usuario.controller");
const materia_service_1 = require("./services/materia.service");
const material_service_1 = require("./services/material.service");
const usuario_service_1 = require("./services/usuario.service");
const materia_entity_1 = require("./domain/materia.entity");
const material_entity_1 = require("./domain/material.entity");
const usuario_entity_1 = require("./domain/usuario.entity");
const notas_entity_1 = require("./domain/notas.entity");
const login_module_1 = require("./modules/login.module");
const notas_controller_1 = require("./controller/notas.controller");
const notas_service_1 = require("./services/notas.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            login_module_1.LoginModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'was',
                password: '12345678',
                database: 'auedb',
                entities: [usuario_entity_1.Usuario, materia_entity_1.Materia, material_entity_1.Material, notas_entity_1.Notas],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([materia_entity_1.Materia, material_entity_1.Material, usuario_entity_1.Usuario, notas_entity_1.Notas]),
        ],
        controllers: [
            materia_controller_1.MateriaController,
            material_controller_1.MaterialController,
            usuario_controller_1.UsuarioController,
            notas_controller_1.NotasController,
        ],
        providers: [
            materia_service_1.MateriaService,
            material_service_1.MaterialService,
            usuario_service_1.UsuarioService,
            notas_service_1.NotasService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map