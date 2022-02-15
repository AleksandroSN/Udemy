import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { ReviewRepository } from "./reviews.repository";

@Injectable()
export class ReviewsService {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.reviewRepository.create(createReviewDto);
  }

  async findAll() {
    return this.reviewRepository.findAll();
  }

  async findOne(id: string) {
    return this.reviewRepository.findOne(id);
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewRepository.update(id, updateReviewDto);
  }

  async remove(id: string) {
    return this.reviewRepository.remove(id);
  }
}
