import { AppModule } from "@modules";
import { NestFactory } from "@nestjs/core";
import { CommandModule, CommandService } from "nestjs-command";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: ["error"], // only errors
  });

  try {
    await app.select(CommandModule).get(CommandService).exec();
    await app.close();
  } catch (error) {
    process.stdout.write(error);
    await app.close();
    process.exit(1);
  }
}
bootstrap();
