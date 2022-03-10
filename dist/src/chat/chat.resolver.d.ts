import { ChatService } from "./chat.service";
export declare class ChatResolver {
    private readonly chatService;
    private pubSub;
    constructor(chatService: ChatService);
    findAll(memberId: string): Promise<string>;
    subscription(id: string): AsyncIterator<unknown, any, undefined>;
    subscribeAll(): AsyncIterator<unknown, any, undefined>;
}
