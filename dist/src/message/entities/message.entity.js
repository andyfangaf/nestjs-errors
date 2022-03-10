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
exports.Message = exports.MessageRepository = void 0;
const uuid_1 = require("uuid");
const core_1 = require("@mikro-orm/core");
const postgresql_1 = require("@mikro-orm/postgresql");
const graphql_1 = require("@nestjs/graphql");
const member_entity_1 = require("../../member/entities/member.entity");
const chat_entity_1 = require("../../chat/entities/chat.entity");
const graphql_type_json_1 = require("graphql-type-json");
class MessageRepository extends postgresql_1.EntityRepository {
}
exports.MessageRepository = MessageRepository;
let Message = class Message {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    (0, core_1.PrimaryKey)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Message.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => member_entity_1.Member),
    (0, core_1.ManyToOne)(() => member_entity_1.Member),
    __metadata("design:type", member_entity_1.Member)
], Message.prototype, "sender", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Message.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.default, { nullable: true }),
    (0, core_1.Property)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Message.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => chat_entity_1.Chat),
    (0, core_1.ManyToOne)(() => chat_entity_1.Chat),
    __metadata("design:type", chat_entity_1.Chat)
], Message.prototype, "chat", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], Message.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, core_1.Property)({ onUpdate: () => new Date() }),
    __metadata("design:type", Date)
], Message.prototype, "updatedAt", void 0);
Message = __decorate([
    (0, core_1.Entity)({ customRepository: () => MessageRepository }),
    (0, graphql_1.ObjectType)()
], Message);
exports.Message = Message;
//# sourceMappingURL=message.entity.js.map