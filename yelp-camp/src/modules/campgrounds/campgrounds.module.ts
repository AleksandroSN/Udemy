import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CampgroundsService } from "./campgrounds.service";
import { CampgroundsController } from "./campgrounds.controller";
import { Campground, CampgroundSchema } from "./schemas/campground.schema";
import { CampgroundRepository } from "./campgrounds.repository";

@Module({
  imports: [MongooseModule.forFeature([{ name: Campground.name, schema: CampgroundSchema }])],
  controllers: [CampgroundsController],
  providers: [CampgroundsService, CampgroundRepository],
})
export class CampgroundsModule {}
