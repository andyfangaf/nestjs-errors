import { v4 } from 'uuid';
import {
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Field, ObjectType } from '@nestjs/graphql';
import { Member } from '../../member/entities/member.entity';
import { Chat } from '../../chat/entities/chat.entity';
import GraphQLJSON from 'graphql-type-json';

export class MessageRepository extends EntityRepository<Message> {}

@Entity({ customRepository: () => MessageRepository })
@ObjectType()
export class Message {
  @PrimaryKey()
  @Field()
  id: string = v4();

  @Field(() => Member)
  @ManyToOne(() => Member)
  sender: Member;

  @Field()
  @Property()
  type: string;

  @Field(() => GraphQLJSON, { nullable: true })
  @Property({ type: 'json', nullable: true })
  content: any;

  @Field(() => Chat)
  @ManyToOne(() => Chat)
  chat: Chat;

  @Field(() => String)
  @Property()
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
