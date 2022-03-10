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
exports.MemberService = void 0;
const postgresql_1 = require("@mikro-orm/postgresql");
const common_1 = require("@nestjs/common");
const member_entity_1 = require("./entities/member.entity");
let MemberService = class MemberService {
    constructor(em) {
        this.em = em;
    }
    create(createMemberInput) {
        return 'This action adds a new member';
    }
    async findAll(tribeId) {
        const res = await this.em.find(member_entity_1.Member, {
            tribe: {
                id: tribeId,
            },
        }, {
            populate: true,
        });
        return res;
    }
    async findOne(id) {
        const res = await this.em.findOneOrFail(member_entity_1.Member, {
            $or: [{ id }, { magicId: id }],
        }, {
            populate: ['chats.members', 'chats.messages'],
        });
        return res;
    }
    update(id, updateMemberInput) {
        return `This action updates a #${id} member`;
    }
    remove(id) {
        return `This action removes a #${id} member`;
    }
};
MemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [postgresql_1.EntityManager])
], MemberService);
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map