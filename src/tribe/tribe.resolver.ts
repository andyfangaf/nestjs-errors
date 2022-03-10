import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TribeService } from './tribe.service';
import { Tribe } from './entities/tribe.entity';
import { CreateTribeInput } from './dto/create-tribe.input';
import { UpdateTribeInput } from './dto/update-tribe.input';

@Resolver(() => Tribe)
export class TribeResolver {
  constructor(private readonly tribeService: TribeService) {}

  @Mutation(() => Tribe)
  createTribe(@Args('createTribeInput') createTribeInput: CreateTribeInput) {
    return this.tribeService.create(createTribeInput);
  }

  @Query(() => Tribe, { name: 'tribe' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.tribeService.findOne(id);
  }

  @Mutation(() => Tribe)
  updateTribe(@Args('updateTribeInput') updateTribeInput: UpdateTribeInput) {
    return this.tribeService.update(updateTribeInput.id, updateTribeInput);
  }

  @Mutation(() => Tribe, { nullable: true })
  removeTribe(@Args('id', { type: () => String }) id: string) {
    return this.tribeService.remove(id);
  }
}
