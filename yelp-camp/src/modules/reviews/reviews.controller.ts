import { Controller, Post, Body, Param, Delete, Redirect } from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
// import { UpdateReviewDto } from "./dto/update-review.dto";

@Controller("campgrounds/:campId/review")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @Redirect()
  async create(@Body() createReviewDto: CreateReviewDto, @Param("campId") campId: string) {
    await this.reviewsService.create(createReviewDto, campId);
    return { url: `/campgrounds/${campId}` };
  }

  // @Get()
  // findAll() {
  //   return this.reviewsService.findAll();
  // }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.reviewsService.findOne(id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewDto) {
  //   return this.reviewsService.update(id, updateReviewDto);
  // }

  @Delete(":id")
  @Redirect()
  async remove(@Param("id") id: string, @Param("campId") campId: string) {
    await this.reviewsService.remove(id, campId);
    return { url: `/campgrounds/${campId}` };
  }
}
