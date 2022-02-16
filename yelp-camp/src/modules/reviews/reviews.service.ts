import { CampgroundRepository } from "@modules/campgrounds";
import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
// import { UpdateReviewDto } from "./dto/update-review.dto";
import { ReviewRepository } from "../../repositories/reviews.repository";

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly campgroundRepository: CampgroundRepository,
  ) {}

  async create(createReviewDto: CreateReviewDto, campId: string) {
    const campground = await this.campgroundRepository.findOne(campId);
    return this.reviewRepository.create(createReviewDto, campground);
  }

  // async findAll() {
  //   return this.reviewRepository.findAll();
  // }

  // async findOne(id: string) {
  //   return this.reviewRepository.findOne(id);
  // }

  // async update(id: string, updateReviewDto: UpdateReviewDto) {
  //   return this.reviewRepository.update(id, updateReviewDto);
  // }

  async remove(id: string, campId: string) {
    await this.campgroundRepository.update(campId, { $pull: { reviews: id } });
    return this.reviewRepository.remove(id);
  }
}
