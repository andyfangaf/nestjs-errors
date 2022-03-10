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
exports.MessageService = void 0;
const postgresql_1 = require("@mikro-orm/postgresql");
const common_1 = require("@nestjs/common");
const message_entity_1 = require("./entities/message.entity");
const core_1 = require("@mikro-orm/core");
let MessageService = class MessageService {
    constructor(em) {
        this.em = em;
    }
    async create(createMessageInput) {
        const message = this.em.create(message_entity_1.Message, createMessageInput);
        await this.em.persistAndFlush(message);
        return message;
    }
    findOne(id) {
        return this.em.findOneOrFail(message_entity_1.Message, id, {
            orderBy: { createdAt: core_1.QueryOrder.ASC },
            populate: true,
        });
    }
    async update(id, updateMessageInput) {
        const entity = await this.em.findOneOrFail(message_entity_1.Message, id);
        const res = (0, core_1.wrap)(entity).assign(updateMessageInput, {
            mergeObjects: true,
        });
        await this.em.flush();
        return res;
    }
    async remove(id) {
        const entity = await this.em.findOneOrFail(message_entity_1.Message, id);
        const res = this.em.remove(entity);
        await this.em.flush();
        return res;
    }
};
MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [postgresql_1.EntityManager])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map