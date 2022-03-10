import { v4 } from 'uuid';
import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  ManyToMany,
  Enum,
  Collection,
  Unique,
  OneToMany,
} from '@mikro-orm/core';
import { Message } from '../../message/entities/message.entity';
import { Tribe } from '../../tribe/entities/tribe.entity';
import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Chat } from '../../chat/entities/chat.entity';

export enum MemberRole {
  ADMIN = 'admin',
  STAFF = 'staff',
  PUBLIC = 'public',
}

registerEnumType(MemberRole, { name: 'MemberRole' });

@Entity()
@ObjectType()
export class Member {
  @PrimaryKey({ type: 'string' })
  @Field()
  @Unique()
  id: string = v4();

  @Property({ nullable: true })
  @Field({ nullable: true })
  name: string;

  @Property()
  @Unique()
  magicId: string;

  @ManyToOne(() => Tribe)
  @Field(() => Tribe)
  tribe: Tribe;

  @Field(() => MemberRole)
  @Enum(() => MemberRole)
  role: MemberRole;

  @Field({ nullable: true })
  @Property({ nullable: true })
  avatar?: string;

  @Field(() => [Chat], { nullable: true })
  @ManyToMany(() => Chat, 'members', {
    nullable: true,
    owner: true,
  })
  chats = new Collection<Chat>(this);

  @Field(() => [Message])
  @OneToMany('Message', 'sender', { mappedBy: 'messages' })
  messages = new Collection<Message>(this);
}
