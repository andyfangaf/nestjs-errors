import type { EntityManager } from '@mikro-orm/core';
import { Seeder, Faker, Factory } from '@mikro-orm/seeder';
import { Chat } from '../src/chat/entities/chat.entity';
export declare class ChatFactory extends Factory<Chat> {
    model: typeof Chat;
    definition(faker: Faker): Partial<Chat>;
}
export declare class ChatSeeder extends Seeder {
    run(em: EntityManager): Promise<void>;
}
