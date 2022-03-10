import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Faker, Factory } from '@mikro-orm/seeder';
import { Member } from '../src/member/entities/member.entity';
export declare class MemberFactory extends Factory<Member> {
    model: typeof Member;
    definition(faker: Faker): Partial<Member>;
}
export declare class MemberSeeder extends Seeder {
    run(em: EntityManager): Promise<void>;
}
