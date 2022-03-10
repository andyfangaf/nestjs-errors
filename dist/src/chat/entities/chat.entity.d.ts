import { Collection } from "@mikro-orm/core";
import { Member } from "../../member/entities/member.entity";
import { Message } from "../../message/entities/message.entity";
export declare enum ChatStatus {
    OPEN = "open",
    CLOSED = "closed"
}
export declare class Chat {
    id: string;
    status: ChatStatus;
    members: Collection<Member, unknown>;
    messages: Message[];
    createdAt: Date;
    updatedAt: Date;
}
