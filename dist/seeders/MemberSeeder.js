"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSeeder = exports.MemberFactory = void 0;
const uuid_1 = require("uuid");
const seeder_1 = require("@mikro-orm/seeder");
const seeder_2 = require("@mikro-orm/seeder");
const member_entity_1 = require("../src/member/entities/member.entity");
class MemberFactory extends seeder_2.Factory {
    constructor() {
        super(...arguments);
        this.model = member_entity_1.Member;
    }
    definition(faker) {
        return {
            name: faker.name.firstName(),
            avatar: faker.image.people(),
            magicId: (0, uuid_1.v4)(),
        };
    }
}
exports.MemberFactory = MemberFactory;
class MemberSeeder extends seeder_1.Seeder {
    async run(em) {
        console.log('Seeding tribes...');
        await new MemberFactory(em).create(5);
    }
}
exports.MemberSeeder = MemberSeeder;
//# sourceMappingURL=MemberSeeder.js.map