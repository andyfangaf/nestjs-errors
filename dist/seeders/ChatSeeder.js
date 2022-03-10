"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatSeeder = exports.ChatFactory = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const chat_entity_1 = require("../src/chat/entities/chat.entity");
class ChatFactory extends seeder_1.Factory {
    constructor() {
        super(...arguments);
        this.model = chat_entity_1.Chat;
    }
    definition(faker) {
        return {
            status: chat_entity_1.ChatStatus.OPEN,
        };
    }
}
exports.ChatFactory = ChatFactory;
class ChatSeeder extends seeder_1.Seeder {
    async run(em) {
        console.log('Seeding chats...');
        await new ChatFactory(em).create(3);
    }
}
exports.ChatSeeder = ChatSeeder;
//# sourceMappingURL=ChatSeeder.js.map