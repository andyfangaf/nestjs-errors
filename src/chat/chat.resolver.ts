import { Resolver, Query, Mutation, Args, Subscription } from "@nestjs/graphql";
import { ChatService } from "./chat.service";
import { Chat } from "./entities/chat.entity";
import { CreateChatInput } from "./dto/create-chat.input";
import { UpdateChatInput } from "./dto/update-chat.input";
import { PubSub } from "graphql-subscriptions";

@Resolver(() => Chat)
export class ChatResolver {
  private pubSub: PubSub;

  constructor(private readonly chatService: ChatService) {
    this.pubSub = new PubSub();
  }

  @Mutation(() => Chat)
  async createChat(@Args("createChatInput") createChatInput: CreateChatInput) {
    const chat = await this.chatService.create(createChatInput);
    this.pubSub.publish(`chat:${chat}`, chat);
    return this.chatService.create(createChatInput);
  }

  @Query(() => Chat, { name: "chat" })
  findOne(@Args("id") id: string) {
    return this.chatService.findOne(id);
  }

  @Query(() => [Chat], { name: "chats" })
  async findAll(@Args("memberId") memberId: string) {
    const res = await this.chatService.findAll(memberId);

    return res;
  }

  @Subscription(() => Chat, {
    name: "chat",
  })
  subscription(@Args("id") id: string) {
    return this.pubSub.asyncIterator(`chat:${id}`);
  }

  @Subscription(() => [Chat], {
    name: "chats",
  })
  subscribeAll() {
    console.log("calling subscription");
    return this.pubSub.asyncIterator(`chats`);
  }

  @Mutation(() => Chat)
  updateChat(@Args("updateChatInput") updateChatInput: UpdateChatInput) {
    const { id } = updateChatInput;
    const res = this.chatService.update(id, updateChatInput);
    this.pubSub.publish(`chat:${id}`, res);
    return res;
  }

  @Mutation(() => Chat)
  removeChat(@Args("id") id: string) {
    const res = this.chatService.remove(id);
    this.pubSub.publish(`chat:${id}`, res);
    return res;
  }
}
