import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { Campground, CampgroundSchema } from "@schemas/campground.schema";
import { CampgroundRepository } from "@repositories/campgrounds.repository";
import { CloudinaryModule } from "@modules/cloudinary";
import { UsersModule } from "@modules/users";
import { MapboxModule } from "@modules/mapbox";
import { memoryStorage } from "multer";
import { CampgroundsService } from "./campgrounds.service";
import { CampgroundsController } from "./campgrounds.controller";

@Module({
  imports: [
    MulterModule.register({
      storage: memoryStorage(),
    }),
    MongooseModule.forFeature([{ name: Campground.name, schema: CampgroundSchema }]),
    forwardRef(() => UsersModule),
    forwardRef(() => CloudinaryModule),
    forwardRef(() => MapboxModule),
  ],
  controllers: [CampgroundsController],
  providers: [CampgroundsService, CampgroundRepository],
  exports: [CampgroundsService, CampgroundRepository],
})
export class CampgroundsModule {}
