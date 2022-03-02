import { Controller, Post, Body, Param, Delete, Redirect, Get } from "@nestjs/common";
import { isAuthor, isLogged, ReqUserDTO, User } from "@shared";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
// import { UpdateReviewDto } from "./dto/update-review.dto";

@Controller("campgrounds/:campId/review")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @isLogged()
  @Redirect()
  async create(
    @Body() createReviewDto: CreateReviewDto,
    @Param("campId") campId: string,
    @User("user") reqUser: ReqUserDTO,
  ) {
    await this.reviewsService.create(createReviewDto, campId, reqUser);
    return { url: `/campgrounds/${campId}` };
  }

  @Get()
  @Redirect()
  redirectToCamp(@Param("campId") campId: string) {
    return { url: `/campgrounds/${campId}` };
  }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateReviewDto: UpdateReviewDto) {
  //   return this.reviewsService.update(id, updateReviewDto);
  // }

  @Delete(":id")
  @isLogged()
  @isAuthor()
  @Redirect()
  async remove(@Param("id") id: string, @Param("campId") campId: string) {
    await this.reviewsService.remove(id, campId);
    return { url: `/campgrounds/${campId}` };
  }
}
