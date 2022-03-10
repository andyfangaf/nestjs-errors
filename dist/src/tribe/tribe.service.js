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
exports.TribeService = void 0;
const tribe_entity_1 = require("./entities/tribe.entity");
const common_1 = require("@nestjs/common");
const core_1 = require("@mikro-orm/core");
const postgresql_1 = require("@mikro-orm/postgresql");
let TribeService = class TribeService {
    constructor(em) {
        this.em = em;
    }
    async create(createTribeInput) {
        const tribe = this.em.create(tribe_entity_1.Tribe, createTribeInput);
        await this.em.persistAndFlush(tribe);
        return tribe;
    }
    findOne(id) {
        return this.em.findOneOrFail(tribe_entity_1.Tribe, id, { populate: true });
    }
    async update(id, updateTribeInput) {
        const entity = await this.em.findOneOrFail(tribe_entity_1.Tribe, id);
        const res = (0, core_1.wrap)(entity).assign(updateTribeInput, {
            mergeObjects: true,
        });
        await this.em.flush();
        return res;
    }
    async remove(id) {
        const entity = await this.em.findOneOrFail(tribe_entity_1.Tribe, id);
        const res = this.em.remove(entity);
        await this.em.flush();
        return res;
    }
};
TribeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [postgresql_1.EntityManager])
], TribeService);
exports.TribeService = TribeService;
//# sourceMappingURL=tribe.service.js.map