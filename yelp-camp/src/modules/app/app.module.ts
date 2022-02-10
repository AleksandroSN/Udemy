import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseConfigService } from "@configs";
import { SeedModule } from "@modules/seeds";
import { CampgroundsModule } from "@modules/campgrounds";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    SeedModule,
    CampgroundsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
