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
exports.TribeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tribe_service_1 = require("./tribe.service");
const tribe_entity_1 = require("./entities/tribe.entity");
const create_tribe_input_1 = require("./dto/create-tribe.input");
const update_tribe_input_1 = require("./dto/update-tribe.input");
let TribeResolver = class TribeResolver {
    constructor(tribeService) {
        this.tribeService = tribeService;
    }
    createTribe(createTribeInput) {
        return this.tribeService.create(createTribeInput);
    }
    findOne(id) {
        return this.tribeService.findOne(id);
    }
    updateTribe(updateTribeInput) {
        return this.tribeService.update(updateTribeInput.id, updateTribeInput);
    }
    removeTribe(id) {
        return this.tribeService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => tribe_entity_1.Tribe),
    __param(0, (0, graphql_1.Args)('createTribeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tribe_input_1.CreateTribeInput]),
    __metadata("design:returntype", void 0)
], TribeResolver.prototype, "createTribe", null);
__decorate([
    (0, graphql_1.Query)(() => tribe_entity_1.Tribe, { name: 'tribe' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TribeResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => tribe_entity_1.Tribe),
    __param(0, (0, graphql_1.Args)('updateTribeInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tribe_input_1.UpdateTribeInput]),
    __metadata("design:returntype", void 0)
], TribeResolver.prototype, "updateTribe", null);
__decorate([
    (0, graphql_1.Mutation)(() => tribe_entity_1.Tribe, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TribeResolver.prototype, "removeTribe", null);
TribeResolver = __decorate([
    (0, graphql_1.Resolver)(() => tribe_entity_1.Tribe),
    __metadata("design:paramtypes", [tribe_service_1.TribeService])
], TribeResolver);
exports.TribeResolver = TribeResolver;
//# sourceMappingURL=tribe.resolver.js.map