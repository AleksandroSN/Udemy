import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CampgroundsModule } from "@modules/campgrounds";
import { ReviewsService } from "./reviews.service";
import { ReviewRepository } from "../../repositories/reviews.repository";
import { ReviewsController } from "./reviews.controller";
import { Review, ReviewSchema } from "../../schemas/review.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    forwardRef(() => CampgroundsModule),
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewRepository],
})
export class ReviewsModule {}
