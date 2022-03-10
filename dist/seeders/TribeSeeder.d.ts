import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Faker, Factory } from '@mikro-orm/seeder';
import { Tribe } from '../src/tribe/entities/tribe.entity';
export declare class TribeFactory extends Factory<Tribe> {
    model: typeof Tribe;
    definition(faker: Faker): Partial<Tribe>;
}
export declare class TribeSeeder extends Seeder {
    constructor();
    run(em: EntityManager): Promise<void>;
}
