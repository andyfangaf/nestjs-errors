import { Tribe } from './entities/tribe.entity';
import { Injectable } from '@nestjs/common';
import { CreateTribeInput } from './dto/create-tribe.input';
import { UpdateTribeInput } from './dto/update-tribe.input';
import { wrap } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class TribeService {
  constructor(private readonly em: EntityManager) {}

  async create(createTribeInput: CreateTribeInput) {
    const tribe = this.em.create(Tribe, createTribeInput);

    await this.em.persistAndFlush(tribe);

    return tribe;
  }

  findOne(id: string) {
    return this.em.findOneOrFail(Tribe, id, { populate: true });
  }

  async update(id: string, updateTribeInput: UpdateTribeInput) {
    const entity = await this.em.findOneOrFail(Tribe, id);

    const res = wrap(entity).assign(updateTribeInput, {
      mergeObjects: true,
    });

    await this.em.flush();

    return res;
  }

  async remove(id: string) {
    const entity = await this.em.findOneOrFail(Tribe, id);
    const res = this.em.remove(entity);

    await this.em.flush();

    return res;
  }
}
