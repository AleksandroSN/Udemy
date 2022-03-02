import { CampgroundRepository } from "@modules/campgrounds";
import { Injectable } from "@nestjs/common";
import { ReviewRepository } from "@repositories/reviews.repository";
import { UsersRepository } from "@repositories/users.repository";
import { ReqUserDTO } from "@shared";
import { CreateReviewDto } from "./dto/create-review.dto";
// import { UpdateReviewDto } from "./dto/update-review.dto";

@Injectable()
export class ReviewsService {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly campgroundRepository: CampgroundRepository,
    private readonly userRepository: UsersRepository,
  ) {}

  async create(createReviewDto: CreateReviewDto, campId: string, author: ReqUserDTO) {
    const campground = await this.campgroundRepository.findOne(campId);
    const user = await this.userRepository.findOne(author._id);
    return this.reviewRepository.create(createReviewDto, campground, user);
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
