import { MessageService } from './message.service';
import { Message } from './entities/message.entity';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
export declare class MessageResolver {
    private readonly messageService;
    constructor(messageService: MessageService);
    createMessage(createMessageInput: CreateMessageInput): Promise<Message>;
    findOne(id: string): Promise<import("@mikro-orm/core").Loaded<Message, never>>;
    updateMessage(updateMessageInput: UpdateMessageInput): Promise<import("@mikro-orm/core").Loaded<Message, never>>;
    removeMessage(id: string): Promise<import("@mikro-orm/knex").EntityManager<import("@mikro-orm/knex").AbstractSqlDriver<import("@mikro-orm/knex").AbstractSqlConnection>>>;
}
