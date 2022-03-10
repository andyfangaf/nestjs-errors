import { v4 } from "uuid";
import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Enum,
  OneToMany,
  Property,
} from "@mikro-orm/core";
import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";

export enum ChatStatus {
  OPEN = "open",
  CLOSED = "closed",
}

registerEnumType(ChatStatus, {
  name: "ChatStatus",
});

@Entity()
@ObjectType()
export class Chat {
  @PrimaryKey()
  @Field()
  id: string = v4();

  @Field(() => ChatStatus)
  @Enum(() => ChatStatus)
  status: ChatStatus = ChatStatus.OPEN;

  @Field(() => String)
  @Property()
  createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
