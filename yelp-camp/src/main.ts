import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  const HOST = "0.0.0.0";
  await app.listen(PORT, HOST);
}
bootstrap();
