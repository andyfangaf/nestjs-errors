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
exports.ChatResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const chat_service_1 = require("./chat.service");
const chat_entity_1 = require("./entities/chat.entity");
const create_chat_input_1 = require("./dto/create-chat.input");
const update_chat_input_1 = require("./dto/update-chat.input");
const graphql_subscriptions_1 = require("graphql-subscriptions");
let ChatResolver = class ChatResolver {
    constructor(chatService) {
        this.chatService = chatService;
        this.pubSub = new graphql_subscriptions_1.PubSub();
    }
    async createChat(createChatInput) {
        const chat = await this.chatService.create(createChatInput);
        this.pubSub.publish(`chat:${chat}`, chat);
        return this.chatService.create(createChatInput);
    }
    findOne(id) {
        return this.chatService.findOne(id);
    }
    async findAll(memberId) {
        const res = await this.chatService.findAll(memberId);
        return res;
    }
    subscription(id) {
        return this.pubSub.asyncIterator(`chat:${id}`);
    }
    subscribeAll() {
        console.log("calling subscription");
        return this.pubSub.asyncIterator(`chats`);
    }
    updateChat(updateChatInput) {
        const { id } = updateChatInput;
        const res = this.chatService.update(id, updateChatInput);
        this.pubSub.publish(`chat:${id}`, res);
        return res;
    }
    removeChat(id) {
        const res = this.chatService.remove(id);
        this.pubSub.publish(`chat:${id}`, res);
        return res;
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    __param(0, (0, graphql_1.Args)("createChatInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chat_input_1.CreateChatInput]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "createChat", null);
__decorate([
    (0, graphql_1.Query)(() => chat_entity_1.Chat, { name: "chat" }),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)(() => [chat_entity_1.Chat], { name: "chats" }),
    __param(0, (0, graphql_1.Args)("memberId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Subscription)(() => chat_entity_1.Chat, {
        name: "chat",
    }),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "subscription", null);
__decorate([
    (0, graphql_1.Subscription)(() => [chat_entity_1.Chat], {
        name: "chats",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "subscribeAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    __param(0, (0, graphql_1.Args)("updateChatInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_chat_input_1.UpdateChatInput]),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "updateChat", null);
__decorate([
    (0, graphql_1.Mutation)(() => chat_entity_1.Chat),
    __param(0, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChatResolver.prototype, "removeChat", null);
ChatResolver = __decorate([
    (0, graphql_1.Resolver)(() => chat_entity_1.Chat),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatResolver);
exports.ChatResolver = ChatResolver;
//# sourceMappingURL=chat.resolver.js.map