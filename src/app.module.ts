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
import config from "../mikro-orm.config";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { ChatModule } from "./chat/chat.module";
import { AuthService } from "./auth/auth.service";
import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from "./auth/auth.guard";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
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
    ChatModule,
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
export class AppModule {}
