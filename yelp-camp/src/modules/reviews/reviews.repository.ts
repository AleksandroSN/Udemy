import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { Review, ReviewDocument } from "./schemas/review.schema";

@Injectable()
export class ReviewRepository {
  constructor(@InjectModel(Review.name) private readonly reviewModel: Model<ReviewDocument>) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    try {
      const review = new this.reviewModel(createReviewDto);
      const result = await review.save();
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  // async seedData(createCampgroundDto: CreateReviewDto[]) {
  //   try {
  //     const campgrounds = await this.reviewModel.insertMany(createCampgroundDto);
  //     return campgrounds;
  //   } catch (error) {
  //     throw new BadRequestException(error);
  //   }
  // }

  async findAll(): Promise<Review[]> {
    const allReviews = await this.reviewModel.find({});
    if (!allReviews) {
      throw new NotFoundException("", "Campground not found");
    }
    return allReviews;
  }

  async findOne(id: string): Promise<Review> {
    const review = await this.reviewModel.findById(id);
    if (!review) {
      throw new NotFoundException("", "Campground not found");
    }
    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    const review = await this.reviewModel.findByIdAndUpdate(id, updateReviewDto);
    if (!review) {
      throw new NotFoundException("", "Campground not found");
    }
    return review;
  }

  async remove(id: string): Promise<any> {
    const deleteResult = await this.reviewModel.findByIdAndDelete(id);
    return deleteResult;
  }
}
