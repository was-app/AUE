"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("../domain/usuario.entity");
const login_service_1 = require("../services/login.service");
const login_controller_1 = require("../controller/login.controller");
let LoginModule = class LoginModule {
};
exports.LoginModule = LoginModule;
exports.LoginModule = LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'e23f6e95a2539343adbfce26505fd1796a266c9441a45eaa0341797e04a89741c3f881b0f2cc2f3b81f59ab9dd2c4e007355cd6037aecb218dfda4da9a68f335',
                signOptions: { expiresIn: '24h' },
            }),
        ],
        providers: [login_service_1.LoginService],
        controllers: [login_controller_1.LoginController],
    })
], LoginModule);
//# sourceMappingURL=login.module.js.map