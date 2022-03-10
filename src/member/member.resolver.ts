import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { CurrentUser } from 'src/auth/auth.decorator';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Mutation(() => Member)
  createMember(
    @Args('createMemberInput') createMemberInput: CreateMemberInput,
  ) {
    return this.memberService.create(createMemberInput);
  }

  @Query(() => [Member], { name: 'members' })
  findAll(@Args('tribeId') tribeId: string) {
    return this.memberService.findAll(tribeId);
  }

  @Query(() => Member, { name: 'member' })
  async findOne(@Args('id') id: string) {
    return await this.memberService.findOne(id);
  }

  @Mutation(() => Member)
  updateMember(
    @Args('updateMemberInput') updateMemberInput: UpdateMemberInput,
  ) {
    return this.memberService.update(updateMemberInput.id, updateMemberInput);
  }

  @Mutation(() => Member)
  removeMember(@Args('id', { type: () => Int }) id: number) {
    return this.memberService.remove(id);
  }

  // LOGGED IN ACCOUNT

  @Query(() => Member, { name: 'account' })
  findCurrentUser(@CurrentUser() user: any) {
    return this.memberService.findOne(user);
  }

  @Mutation(() => Member, { name: 'account' })
  removeCurrentUser(@CurrentUser() user: any) {
    return this.memberService.remove(user);
  }

  @Mutation(() => Member, { name: 'account' })
  updateCurrentUser(
    @CurrentUser() user: any,
    @Args('updateMemberInput') updateMemberInput: UpdateMemberInput,
  ) {
    return this.memberService.update(user.id, updateMemberInput);
  }
}
