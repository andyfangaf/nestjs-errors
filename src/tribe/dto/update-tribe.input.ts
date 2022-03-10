import { CreateTribeInput } from './create-tribe.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateTribeInput extends PartialType(CreateTribeInput) {
  @ApiProperty()
  @Field()
  id: string;
}
