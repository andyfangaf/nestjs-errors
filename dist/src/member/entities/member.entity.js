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
exports.Member = exports.MemberRole = void 0;
const uuid_1 = require("uuid");
const core_1 = require("@mikro-orm/core");
const message_entity_1 = require("../../message/entities/message.entity");
const tribe_entity_1 = require("../../tribe/entities/tribe.entity");
const graphql_1 = require("@nestjs/graphql");
const chat_entity_1 = require("../../chat/entities/chat.entity");
var MemberRole;
(function (MemberRole) {
    MemberRole["ADMIN"] = "admin";
    MemberRole["STAFF"] = "staff";
    MemberRole["PUBLIC"] = "public";
})(MemberRole = exports.MemberRole || (exports.MemberRole = {}));
(0, graphql_1.registerEnumType)(MemberRole, { name: 'MemberRole' });
let Member = class Member {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.chats = new core_1.Collection(this);
        this.messages = new core_1.Collection(this);
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ type: 'string' }),
    (0, graphql_1.Field)(),
    (0, core_1.Unique)(),
    __metadata("design:type", String)
], Member.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)(),
    (0, core_1.Unique)(),
    __metadata("design:type", String)
], Member.prototype, "magicId", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => tribe_entity_1.Tribe),
    (0, graphql_1.Field)(() => tribe_entity_1.Tribe),
    __metadata("design:type", tribe_entity_1.Tribe)
], Member.prototype, "tribe", void 0);
__decorate([
    (0, graphql_1.Field)(() => MemberRole),
    (0, core_1.Enum)(() => MemberRole),
    __metadata("design:type", String)
], Member.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)(() => [chat_entity_1.Chat], { nullable: true }),
    (0, core_1.ManyToMany)(() => chat_entity_1.Chat, 'members', {
        nullable: true,
        owner: true,
    }),
    __metadata("design:type", Object)
], Member.prototype, "chats", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_entity_1.Message]),
    (0, core_1.OneToMany)('Message', 'sender', { mappedBy: 'messages' }),
    __metadata("design:type", Object)
], Member.prototype, "messages", void 0);
Member = __decorate([
    (0, core_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Member);
exports.Member = Member;
//# sourceMappingURL=member.entity.js.map