import { ChatService } from './chat.service';
import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
export declare class ChatResolver {
    private readonly chatService;
    private pubSub;
    constructor(chatService: ChatService);
    createChat(createChatInput: CreateChatInput): Promise<Chat>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Chat, "members" | "messages">>;
    findAll(memberId: string): Promise<import("@mikro-orm/core").Loaded<Chat, never>[]>;
    subscription(id: string): AsyncIterator<unknown, any, undefined>;
    subscribeAll(): AsyncIterator<unknown, any, undefined>;
    updateChat(updateChatInput: UpdateChatInput): Promise<import("@mikro-orm/core").Loaded<Chat, never>>;
    removeChat(id: string): Promise<import("@mikro-orm/knex").EntityManager<import("@mikro-orm/knex").AbstractSqlDriver<import("@mikro-orm/knex").AbstractSqlConnection>>>;
}
