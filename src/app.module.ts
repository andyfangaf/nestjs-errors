import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import {
  ApolloServerPluginLandingPageLocalDefault,
  Context,
} from "apollo-server-core";
import { ThrottlerModule } from "@nestjs/throttler";
import * as localtunnel from "localtunnel";
import * as hostile from "hostile";
import config from "../mikro-orm.config";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { TribeModule } from "./tribe/tribe.module";
import { ChatModule } from "./chat/chat.module";
import { MemberModule } from "./member/member.module";
import { MessageModule } from "./message/message.module";
import { AuthService } from "./auth/auth.service";
import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from "./auth/auth.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    MikroOrmModule.forRoot(config),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.graphql",
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        "subscriptions-transport-ws": {
          onConnect: (connectionParams) => {
            return connectionParams;
          },
        },
      },
      cors: {
        credentials: true,
        origin: "*",
      },
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 60,
    }),
    TribeModule,
    ChatModule,
    MemberModule,
    MessageModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {
  private tunnel: localtunnel;

  async onModuleInit() {
    if (process.env.NODE_ENV === "development") {
      hostile.set("127.0.0.1", process.env.HOSTNAME);
      // this.tunnel = await localtunnel({ port: 80, subdomain: 'mammal-api' });

      // this.tunnel.on('close', () => {
      //   console.log(`Closed tunnel at ${this.tunnel.url}`);
      // });

      // console.log(`Started tunnel at ${this.tunnel.url}`);
    }
  }

  beforeApplicationShutdown() {
    if (process.env.NODE_ENV === "development") {
      hostile.remove("127.0.0.1", process.env.HOSTNAME);
      // this.tunnel.close();
      // console.log('Gracefully shut down.');
    }
  }
}
