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
exports.Chat = exports.ChatStatus = void 0;
const uuid_1 = require("uuid");
const core_1 = require("@mikro-orm/core");
const graphql_1 = require("@nestjs/graphql");
var ChatStatus;
(function (ChatStatus) {
    ChatStatus["OPEN"] = "open";
    ChatStatus["CLOSED"] = "closed";
})(ChatStatus = exports.ChatStatus || (exports.ChatStatus = {}));
(0, graphql_1.registerEnumType)(ChatStatus, {
    name: "ChatStatus",
});
let Chat = class Chat {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.status = ChatStatus.OPEN;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    (0, core_1.PrimaryKey)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Chat.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => ChatStatus),
    (0, core_1.Enum)(() => ChatStatus),
    __metadata("design:type", String)
], Chat.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], Chat.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, core_1.Property)({ onUpdate: () => new Date() }),
    __metadata("design:type", Date)
], Chat.prototype, "updatedAt", void 0);
Chat = __decorate([
    (0, core_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Chat);
exports.Chat = Chat;
//# sourceMappingURL=chat.entity.js.map