import type { EntityManager } from '@mikro-orm/core';
import { Seeder, Faker, Factory } from '@mikro-orm/seeder';
import { Message } from '../src/message/entities/message.entity';
export declare class MessageFactory extends Factory<Message> {
    model: typeof Message;
    definition(faker: Faker): Partial<Message>;
}
export declare class MessageSeeder extends Seeder {
    run(em: EntityManager): Promise<void>;
}
