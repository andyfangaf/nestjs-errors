import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CreateMessageInput } from './dto/create-message.input';
import { UpdateMessageInput } from './dto/update-message.input';
import { Message } from './entities/message.entity';
import { QueryOrder, wrap } from '@mikro-orm/core';

@Injectable()
export class MessageService {
  constructor(private readonly em: EntityManager) {}

  async create(createMessageInput: CreateMessageInput) {
    const message = this.em.create(Message, createMessageInput);

    await this.em.persistAndFlush(message);

    return message;
  }

  findOne(id: string) {
    return this.em.findOneOrFail(Message, id, {
      orderBy: { createdAt: QueryOrder.ASC },
      populate: true,
    });
  }

  async update(id: string, updateMessageInput: UpdateMessageInput) {
    const entity = await this.em.findOneOrFail(Message, id);

    const res = wrap(entity).assign(updateMessageInput, {
      mergeObjects: true,
    });

    await this.em.flush();

    return res;
  }

  async remove(id: string) {
    const entity = await this.em.findOneOrFail(Message, id);
    const res = this.em.remove(entity);

    await this.em.flush();

    return res;
  }
}
