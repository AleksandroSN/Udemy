import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ReviewRepository } from "@repositories/reviews.repository";
import { Review, ReviewSchema } from "@schemas/review.schema";
import { CampgroundsModule } from "@modules/campgrounds";
import { UsersModule } from "@modules/users";
import { ReviewsService } from "./reviews.service";
import { ReviewsController } from "./reviews.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    forwardRef(() => CampgroundsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService, ReviewRepository],
})
export class ReviewsModule {}
