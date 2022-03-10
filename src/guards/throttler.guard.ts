import { Injectable } from '@nestjs/common';
import {
  ThrottlerGuard as BaseThrottlerGuard,
  ThrottlerException,
} from '@nestjs/throttler';
import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class ThrottlerGuard extends BaseThrottlerGuard {
  getRequestResponse(context: ExecutionContext) {
    const gqlCtx = GqlExecutionContext.create(context);
    const ctx = gqlCtx.getContext();
    const { req, res } = ctx;

    return { req, res };
  }

  // async handleRequest(
  //   context: ExecutionContext,
  //   limit: number,
  //   ttl: number,
  // ): Promise<boolean> {
  //   const client = context.switchToWs().getClient();
  //   const ip = client.conn.remoteAddress;
  //   const key = this.generateKey(context, ip);
  //   const ttls = await this.storageService.getRecord(key);

  //   if (ttls.length >= limit) {
  //     throw new ThrottlerException();
  //   }

  //   await this.storageService.addRecord(key, ttl);
  //   return true;
  // }
}
