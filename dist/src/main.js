"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const compression = require("compression");
const helmet_1 = require("helmet");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use((0, helmet_1.default)());
    app.use(compression());
    app.use(cookieParser());
    const setupSwagger = () => {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Mammal')
            .setDescription('Docs for the Mammal API')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('docs', app, document);
    };
    setupSwagger();
    app.enableShutdownHooks();
    await app.listen(80);
}
bootstrap();
//# sourceMappingURL=main.js.map