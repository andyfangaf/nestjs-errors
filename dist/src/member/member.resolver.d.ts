import { MemberService } from './member.service';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
export declare class MemberResolver {
    private readonly memberService;
    constructor(memberService: MemberService);
    createMember(createMemberInput: CreateMemberInput): string;
    findAll(tribeId: string): Promise<import("@mikro-orm/core").Loaded<Member, never>[]>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Member, "chats.members" | "chats.messages">>;
    updateMember(updateMemberInput: UpdateMemberInput): string;
    removeMember(id: number): string;
    findCurrentUser(user: any): Promise<import("@mikro-orm/core").Loaded<Member, "chats.members" | "chats.messages">>;
    removeCurrentUser(user: any): string;
    updateCurrentUser(user: any, updateMemberInput: UpdateMemberInput): string;
}
