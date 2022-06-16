import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const appid = process.env.APPID;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appid || 9999);
}
bootstrap();
