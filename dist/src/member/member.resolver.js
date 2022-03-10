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
exports.MemberResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const member_service_1 = require("./member.service");
const member_entity_1 = require("./entities/member.entity");
const create_member_input_1 = require("./dto/create-member.input");
const update_member_input_1 = require("./dto/update-member.input");
const auth_decorator_1 = require("../auth/auth.decorator");
let MemberResolver = class MemberResolver {
    constructor(memberService) {
        this.memberService = memberService;
    }
    createMember(createMemberInput) {
        return this.memberService.create(createMemberInput);
    }
    findAll(tribeId) {
        return this.memberService.findAll(tribeId);
    }
    async findOne(id) {
        return await this.memberService.findOne(id);
    }
    updateMember(updateMemberInput) {
        return this.memberService.update(updateMemberInput.id, updateMemberInput);
    }
    removeMember(id) {
        return this.memberService.remove(id);
    }
    findCurrentUser(user) {
        return this.memberService.findOne(user);
    }
    removeCurrentUser(user) {
        return this.memberService.remove(user);
    }
    updateCurrentUser(user, updateMemberInput) {
        return this.memberService.update(user.id, updateMemberInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member),
    __param(0, (0, graphql_1.Args)('createMemberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_member_input_1.CreateMemberInput]),
    __metadata("design:returntype", void 0)
], MemberResolver.prototype, "createMember", null);
__decorate([
    (0, graphql_1.Query)(() => [member_entity_1.Member], { name: 'members' }),
    __param(0, (0, graphql_1.Args)('tribeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MemberResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => member_entity_1.Member, { name: 'member' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MemberResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member),
    __param(0, (0, graphql_1.Args)('updateMemberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_member_input_1.UpdateMemberInput]),
    __metadata("design:returntype", void 0)
], MemberResolver.prototype, "updateMember", null);
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MemberResolver.prototype, "removeMember", null);
__decorate([
    (0, graphql_1.Query)(() => member_entity_1.Member, { name: 'account' }),
    __param(0, (0, auth_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemberResolver.prototype, "findCurrentUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member, { name: 'account' }),
    __param(0, (0, auth_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MemberResolver.prototype, "removeCurrentUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => member_entity_1.Member, { name: 'account' }),
    __param(0, (0, auth_decorator_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('updateMemberInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_member_input_1.UpdateMemberInput]),
    __metadata("design:returntype", void 0)
], MemberResolver.prototype, "updateCurrentUser", null);
MemberResolver = __decorate([
    (0, graphql_1.Resolver)(() => member_entity_1.Member),
    __metadata("design:paramtypes", [member_service_1.MemberService])
], MemberResolver);
exports.MemberResolver = MemberResolver;
//# sourceMappingURL=member.resolver.js.map