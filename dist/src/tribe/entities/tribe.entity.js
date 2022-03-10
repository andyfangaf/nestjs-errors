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
exports.Tribe = exports.TribeTier = exports.TribeRepository = void 0;
const uuid_1 = require("uuid");
const core_1 = require("@mikro-orm/core");
const postgresql_1 = require("@mikro-orm/postgresql");
const graphql_1 = require("@nestjs/graphql");
class TribeRepository extends postgresql_1.EntityRepository {
}
exports.TribeRepository = TribeRepository;
var TribeTier;
(function (TribeTier) {
    TribeTier["FREE"] = "free";
    TribeTier["GROWTH"] = "growth";
})(TribeTier = exports.TribeTier || (exports.TribeTier = {}));
(0, graphql_1.registerEnumType)(TribeTier, {
    name: "TribeTier",
});
let Tribe = class Tribe {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.tier = TribeTier.FREE;
        this.createdAt = new Date();
    }
};
__decorate([
    (0, core_1.PrimaryKey)({ type: "string" }),
    (0, core_1.Unique)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Tribe.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Tribe.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Tribe.prototype, "logo", void 0);
__decorate([
    (0, graphql_1.Field)(() => TribeTier),
    (0, core_1.Enum)(() => TribeTier),
    __metadata("design:type", String)
], Tribe.prototype, "tier", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], Tribe.prototype, "createdAt", void 0);
Tribe = __decorate([
    (0, core_1.Entity)({ customRepository: () => TribeRepository }),
    (0, graphql_1.ObjectType)()
], Tribe);
exports.Tribe = Tribe;
//# sourceMappingURL=tribe.entity.js.map