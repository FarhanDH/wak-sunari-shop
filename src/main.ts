import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app
    .listen(+config.serverPort)
    .then(() => console.log(`server started 🚀 on port ${config.serverPort}`));
}
bootstrap();
