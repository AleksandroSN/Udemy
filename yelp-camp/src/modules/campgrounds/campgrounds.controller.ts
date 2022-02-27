import { Controller, Get, Post, Body, Put, Param, Delete, Redirect, Req } from "@nestjs/common";
import { isLogged, Page, ReqUserDTO, User } from "@shared";
import { CampgroundsService } from "./campgrounds.service";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

@Controller("campgrounds")
export class CampgroundsController {
  constructor(private readonly campgroundsService: CampgroundsService) {}

  @Post()
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
    const { username } = author;
    return {
      location,
      description,
      title,
      price,
      image,
      _id,
      reviews,
      username,
      docTitle: "One campground ",
    };
  }

  @Get(":id/edit")
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
  @Redirect("/campgrounds", 301)
  async remove(@Param("id") id: string) {
    await this.campgroundsService.remove(id);
  }
}
