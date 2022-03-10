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
exports.MessageResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const message_service_1 = require("./message.service");
const message_entity_1 = require("./entities/message.entity");
const create_message_input_1 = require("./dto/create-message.input");
const update_message_input_1 = require("./dto/update-message.input");
let MessageResolver = class MessageResolver {
    constructor(messageService) {
        this.messageService = messageService;
    }
    createMessage(createMessageInput) {
        return this.messageService.create(createMessageInput);
    }
    findOne(id) {
        return this.messageService.findOne(id);
    }
    updateMessage(updateMessageInput) {
        return this.messageService.update(updateMessageInput.id, updateMessageInput);
    }
    removeMessage(id) {
        return this.messageService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    __param(0, (0, graphql_1.Args)('createMessageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_input_1.CreateMessageInput]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "createMessage", null);
__decorate([
    (0, graphql_1.Query)(() => message_entity_1.Message, { name: 'message' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    __param(0, (0, graphql_1.Args)('updateMessageInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_message_input_1.UpdateMessageInput]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "updateMessage", null);
__decorate([
    (0, graphql_1.Mutation)(() => message_entity_1.Message),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "removeMessage", null);
MessageResolver = __decorate([
    (0, graphql_1.Resolver)(() => message_entity_1.Message),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=message.resolver.js.map