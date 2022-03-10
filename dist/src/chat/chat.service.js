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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const chat_entity_1 = require("./entities/chat.entity");
const postgresql_1 = require("@mikro-orm/postgresql");
const core_1 = require("@mikro-orm/core");
let ChatService = class ChatService {
    constructor(em) {
        this.em = em;
    }
    async create(createChatInput) {
        const chat = this.em.create(chat_entity_1.Chat, createChatInput);
        await this.em.persistAndFlush(chat);
        return chat;
    }
    async findAll(memberId) {
        const res = await this.em.find(chat_entity_1.Chat, {
            members: {
                id: {
                    $in: [memberId],
                },
            },
        }, { populate: true, orderBy: { updatedAt: core_1.QueryOrder.DESC } });
        return res;
    }
    async findOne(id) {
        return await this.em.findOneOrFail(chat_entity_1.Chat, id, {
            populate: ['members', 'messages'],
            orderBy: { messages: { createdAt: core_1.QueryOrder.DESC } },
        });
    }
    async update(id, updateChatInput) {
        const entity = await this.em.findOneOrFail(chat_entity_1.Chat, id);
        const res = (0, core_1.wrap)(entity).assign(updateChatInput, {
            mergeObjects: true,
        });
        await this.em.flush();
        return res;
    }
    async remove(id) {
        const entity = await this.em.findOneOrFail(chat_entity_1.Chat, id);
        const res = this.em.remove(entity);
        await this.em.flush();
        return res;
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [postgresql_1.EntityManager])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map