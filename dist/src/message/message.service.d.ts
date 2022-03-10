import { EntityManager } from '@mikro-orm/postgresql';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { Message } from './entities/message.entity';
export declare class MessageService {
    private readonly em;
    constructor(em: EntityManager);
    create(createMessageInput: CreateMessageInput): Promise<Message>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Message, never>>;
    update(id: string, updateMessageInput: UpdateMessageInput): Promise<import("@mikro-orm/core").Loaded<Message, never>>;
    remove(id: string): Promise<EntityManager<import("@mikro-orm/postgresql").AbstractSqlDriver<import("@mikro-orm/postgresql").AbstractSqlConnection>>>;
}
