import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';

@Injectable()
export class MemberService {
  constructor(private readonly em: EntityManager) {}

  create(createMemberInput: CreateMemberInput) {
    return 'This action adds a new member';
  }

  async findAll(tribeId: string) {
    const res = await this.em.find(
      Member,
      {
        tribe: {
          id: tribeId,
        },
      },
      {
        populate: true,
      },
    );

    return res;
  }

  async findOne(id: string) {
    const res = await this.em.findOneOrFail(
      Member,
      {
        $or: [{ id }, { magicId: id }],
      },
      {
        populate: ['chats.members', 'chats.messages'],
      },
    );

    return res;
  }

  update(id: number, updateMemberInput: UpdateMemberInput) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
