"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TribeSeeder = exports.TribeFactory = void 0;
const MemberSeeder_1 = require("./MemberSeeder");
const MessageSeeder_1 = require("./MessageSeeder");
const seeder_1 = require("@mikro-orm/seeder");
const seeder_2 = require("@mikro-orm/seeder");
const tribe_entity_1 = require("../src/tribe/entities/tribe.entity");
const member_entity_1 = require("../src/member/entities/member.entity");
const ChatSeeder_1 = require("./ChatSeeder");
class TribeFactory extends seeder_2.Factory {
    constructor() {
        super(...arguments);
        this.model = tribe_entity_1.Tribe;
    }
    definition(faker) {
        return { name: faker.company.companyName(), logo: faker.image.imageUrl() };
    }
}
exports.TribeFactory = TribeFactory;
class TribeSeeder extends seeder_1.Seeder {
    constructor() {
        super();
    }
    async run(em) {
        console.log('Seeding tribes...');
        const paidTribe = new TribeFactory(em).makeOne({
            name: 'The Krusty Krab',
            tier: tribe_entity_1.TribeTier.GROWTH,
        });
        const paidTribeOwners = new MemberSeeder_1.MemberFactory(em)
            .each((member) => {
            member.tribe = paidTribe;
            member.role = member_entity_1.MemberRole.ADMIN;
            member.name = 'Mr. Krabs';
            member.id = member.name;
        })
            .make(1);
        const paidTribeStaff = new MemberSeeder_1.MemberFactory(em)
            .each((member) => {
            member.tribe = paidTribe;
            member.role = member_entity_1.MemberRole.STAFF;
            member.name = 'Spongebob';
            member.magicId = process.env.MAGIC_TEST_USER;
            member.id = member.name;
        })
            .make(1);
        const paidTribeUsers = new MemberSeeder_1.MemberFactory(em)
            .each((member) => {
            member.tribe = paidTribe;
            member.role = member_entity_1.MemberRole.PUBLIC;
            const chats = new ChatSeeder_1.ChatFactory(em).make(2);
            chats.forEach((chat) => {
                const memberMessages = new MessageSeeder_1.MessageFactory(em).make(5, {
                    chat,
                    sender: member,
                });
                const staffMessages = new MessageSeeder_1.MessageFactory(em).make(5, {
                    chat,
                    sender: paidTribeStaff[0],
                });
                chat.messages = [...memberMessages, ...staffMessages];
                chat.members.set([member, paidTribeStaff[0]]);
                paidTribeStaff[0].chats.add(chat);
                member.chats.add(chat);
            });
        })
            .make(20);
        console.log(paidTribeStaff[0].chats);
        await em.persistAndFlush([
            paidTribe,
            ...paidTribeUsers,
            ...paidTribeStaff,
            ...paidTribeOwners,
        ]);
    }
}
exports.TribeSeeder = TribeSeeder;
//# sourceMappingURL=TribeSeeder.js.map