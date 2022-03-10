import { EntityRepository } from '@mikro-orm/postgresql';
import { Member } from '../../member/entities/member.entity';
import { Chat } from '../../chat/entities/chat.entity';
export declare class MessageRepository extends EntityRepository<Message> {
}
export declare class Message {
    id: string;
    sender: Member;
    type: string;
    content: any;
    chat: Chat;
    createdAt: Date;
    updatedAt: Date;
}
