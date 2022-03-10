import { Injectable } from '@nestjs/common';
import { Chat } from './entities/chat.entity';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { EntityManager } from '@mikro-orm/postgresql';
import { QueryOrder, wrap } from '@mikro-orm/core';

@Injectable()
export class ChatService {
  constructor(private readonly em: EntityManager) {}

  async create(createChatInput: CreateChatInput) {
    const chat = this.em.create(Chat, createChatInput);

    await this.em.persistAndFlush(chat);

    return chat;
  }

  async findAll(memberId: string) {
    const res = await this.em.find(
      Chat,
      {
        members: {
          id: {
            $in: [memberId],
          },
        },
      },
      { populate: true, orderBy: { updatedAt: QueryOrder.DESC } },
    );

    return res;
  }

  async findOne(id: string) {
    return await this.em.findOneOrFail(Chat, id, {
      populate: ['members', 'messages'],
      orderBy: { messages: { createdAt: QueryOrder.DESC } },
    });
  }

  async update(id: string, updateChatInput: UpdateChatInput) {
    const entity = await this.em.findOneOrFail(Chat, id);

    const res = wrap(entity).assign(updateChatInput, {
      mergeObjects: true,
    });

    await this.em.flush();

    return res;
  }

  async remove(id: string) {
    const entity = await this.em.findOneOrFail(Chat, id);
    const res = this.em.remove(entity);

    await this.em.flush();

    return res;
  }
}
