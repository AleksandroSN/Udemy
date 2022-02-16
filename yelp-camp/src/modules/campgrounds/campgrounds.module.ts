import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Campground, CampgroundSchema } from "@schemas/campground.schema";
import { CampgroundRepository } from "@repositories/campgrounds.repository";
import { CampgroundsService } from "./campgrounds.service";
import { CampgroundsController } from "./campgrounds.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: Campground.name, schema: CampgroundSchema }])],
  controllers: [CampgroundsController],
  providers: [CampgroundsService, CampgroundRepository],
  exports: [CampgroundsService, CampgroundRepository],
})
export class CampgroundsModule {}
