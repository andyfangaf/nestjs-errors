import { Collection } from '@mikro-orm/core';
import { Message } from '../../message/entities/message.entity';
import { Tribe } from '../../tribe/entities/tribe.entity';
import { Chat } from '../../chat/entities/chat.entity';
export declare enum MemberRole {
    ADMIN = "admin",
    STAFF = "staff",
    PUBLIC = "public"
}
export declare class Member {
    id: string;
    name: string;
    magicId: string;
    tribe: Tribe;
    role: MemberRole;
    avatar?: string;
    chats: Collection<Chat, unknown>;
    messages: Collection<Message, unknown>;
}
