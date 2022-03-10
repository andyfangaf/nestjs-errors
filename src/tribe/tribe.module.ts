import { Module } from '@nestjs/common';
import { TribeService } from './tribe.service';
import { TribeResolver } from './tribe.resolver';

@Module({
  providers: [TribeResolver, TribeService],
})
export class TribeModule {}
