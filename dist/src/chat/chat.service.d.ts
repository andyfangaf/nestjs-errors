import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { EntityManager } from '@mikro-orm/postgresql';
export declare class ChatService {
    private readonly em;
    constructor(em: EntityManager);
    create(createChatInput: CreateChatInput): Promise<Chat>;
    findAll(memberId: string): Promise<import("@mikro-orm/core").Loaded<Chat, never>[]>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Chat, "members" | "messages">>;
    update(id: string, updateChatInput: UpdateChatInput): Promise<import("@mikro-orm/core").Loaded<Chat, never>>;
    remove(id: string): Promise<EntityManager<import("@mikro-orm/postgresql").AbstractSqlDriver<import("@mikro-orm/postgresql").AbstractSqlConnection>>>;
}
