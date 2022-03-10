import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext, GraphQLModule } from '@nestjs/graphql';
import { noop } from 'lodash';

@Injectable()
export class AuthGuard extends PassportAuthGuard('bearer') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    // req used in http queries and mutations, connection is used in websocket subscription connections, check AppModule
    const { req, connection } = ctx.getContext();
    console.log(ctx.getContext());

    if (connection) {
      connection.context.logIn = () => {};
    }

    // if subscriptions/webSockets, let it pass headers from connection.context to passport
    return connection && connection.context && connection.context.headers
      ? connection.context
      : req;
  }

  // eslint-disable-next-line
  logIn(): any {}
}
