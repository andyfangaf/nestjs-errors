"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSeeder = exports.MessageFactory = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const message_entity_1 = require("../src/message/entities/message.entity");
class MessageFactory extends seeder_1.Factory {
    constructor() {
        super(...arguments);
        this.model = message_entity_1.Message;
    }
    definition(faker) {
        return {
            type: 'text',
        };
    }
}
exports.MessageFactory = MessageFactory;
class MessageSeeder extends seeder_1.Seeder {
    async run(em) {
        console.log('Seeding chats...');
        await new MessageFactory(em).create(10);
    }
}
exports.MessageSeeder = MessageSeeder;
//# sourceMappingURL=MessageSeeder.js.map