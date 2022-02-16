import { APP_FILTER, APP_PIPE } from "@nestjs/core";
import { Module, ValidationPipe } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { MongooseConfigService } from "@configs";
import { SeedModule } from "@modules/seeds";
import { CampgroundsModule } from "@modules/campgrounds";
import { ReviewsModule } from "@modules/reviews";
import { NotFoundExceptionFilter } from "@exceptions/not_found_exception";
import { BadRequestExceptionFilter } from "@exceptions/bad_request_exception";
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
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule {}
