import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(compression());
  app.use(cookieParser());

  const setupSwagger = () => {
    const config = new DocumentBuilder()
      .setTitle('Mammal')
      .setDescription('Docs for the Mammal API')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  };

  setupSwagger();

  app.enableShutdownHooks();
  await app.listen(80);
}

bootstrap();
