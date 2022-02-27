import { AuthorInterceptor } from "@interceptors";
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Redirect,
  Req,
  UseInterceptors,
} from "@nestjs/common";
import { isLogged, Page, ReqUserDTO, User } from "@shared";
import { CampgroundsService } from "./campgrounds.service";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

@Controller("campgrounds")
export class CampgroundsController {
  constructor(private readonly campgroundsService: CampgroundsService) {}

  @Post()
  @isLogged()
  @UseInterceptors(AuthorInterceptor)
  @Redirect()
  async create(
    @Body() createCampgroundDto: CreateCampgroundDto,
    @Req() req,
    @User("user") reqUser: ReqUserDTO,
  ) {
    const { _id } = await this.campgroundsService.create(createCampgroundDto, reqUser);
    req.flash("success", "Succesfully created new Camp");
    return { url: `/campgrounds/${_id}` };
  }

  @Get()
  @Page("campgrounds")
  async findAll() {
    const campgrounds = await this.campgroundsService.findAll();
    return { campgrounds, docTitle: "All campgrounds" };
  }

  @Get("/new")
  @isLogged()
  @Page("campground_new")
  async addNew() {
    return {
      docTitle: "add new campground",
    };
  }

  @Get(":id")
  @Page("campground")
  async findOne(@Param("id") id: string) {
    const { location, description, title, price, image, _id, reviews, author } =
      await this.campgroundsService.findOne(id);
    return {
      location,
      description,
      title,
      price,
      image,
      _id,
      reviews,
      author,
      docTitle: "One campground ",
    };
  }

  @Get(":id/edit")
  @isLogged()
  @UseInterceptors(AuthorInterceptor)
  @Page("campground_update")
  async updateCamp(@Param("id") id: string) {
    const { location, description, title, price, image, _id, author } =
      await this.campgroundsService.findOne(id);
    return {
      location,
      description,
      title,
      price,
      image,
      _id,
      author,
      docTitle: "update One campground ",
    };
  }

  @Put(":id")
  @isLogged()
  @UseInterceptors(AuthorInterceptor)
  @Redirect()
  async update(
    @Param("id") id: string,
    @Body() updateCampgroundDto: UpdateCampgroundDto,
    @Req() req,
  ) {
    const { _id } = await this.campgroundsService.update(id, updateCampgroundDto);
    req.flash("success", "Succesfully updated Camp");
    return { url: `/campgrounds/${_id}` };
  }

  @Delete(":id")
  @isLogged()
  @UseInterceptors(AuthorInterceptor)
  @Redirect("/campgrounds", 301)
  async remove(@Param("id") id: string) {
    await this.campgroundsService.remove(id);
  }
}
