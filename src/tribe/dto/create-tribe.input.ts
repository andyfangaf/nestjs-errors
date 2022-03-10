import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateTribeInput {
  @ApiProperty()
  @Field(() => String, {
    nullable: true,
  })
  name: string;
}
