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

  @Query(() => [Chat], { name: "chats" })
  async findAll(@Args("memberId") memberId: string) {
    const res = await this.chatService.findAll(memberId);
    this.pubSub.publish("chats", { chats: "foo" });

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
}
