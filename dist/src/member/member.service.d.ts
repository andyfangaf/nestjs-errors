import { EntityManager } from '@mikro-orm/postgresql';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
export declare class MemberService {
    private readonly em;
    constructor(em: EntityManager);
    create(createMemberInput: CreateMemberInput): string;
    findAll(tribeId: string): Promise<import("@mikro-orm/core").Loaded<Member, never>[]>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Member, "chats.members" | "chats.messages">>;
    update(id: number, updateMemberInput: UpdateMemberInput): string;
    remove(id: number): string;
}
