import { v4 } from "uuid";
import { Entity, PrimaryKey, Property, Enum, Unique } from "@mikro-orm/core";
import { EntityRepository } from "@mikro-orm/postgresql";
import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";

export class TribeRepository extends EntityRepository<Tribe> {}

export enum TribeTier {
  FREE = "free",
  GROWTH = "growth",
}

registerEnumType(TribeTier, {
  name: "TribeTier",
});

@Entity({ customRepository: () => TribeRepository })
@ObjectType()
export class Tribe {
  @PrimaryKey({ type: "string" })
  @Unique()
  @Field()
  id: string = v4();

  @Property({ nullable: true })
  @Field({ nullable: true })
  name: string;

  @Property({ nullable: true })
  @Field({ nullable: true })
  logo: string;

  @Field(() => TribeTier)
  @Enum(() => TribeTier)
  tier: TribeTier = TribeTier.FREE;

  @Field()
  @Property()
  createdAt: Date = new Date();
}
