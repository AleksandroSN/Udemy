import { Controller, Get, Post, Body, Put, Param, Delete, Redirect } from "@nestjs/common";
import { Page } from "@shared";
import { CampgroundsService } from "./campgrounds.service";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

@Controller("campgrounds")
export class CampgroundsController {
  constructor(private readonly campgroundsService: CampgroundsService) {}

  @Post()
  @Redirect()
  async create(@Body() createCampgroundDto: CreateCampgroundDto) {
    const { _id } = await this.campgroundsService.create(createCampgroundDto);
    return { url: `/campgrounds/${_id}` };
  }

  @Get()
  @Page("campgrounds")
  async findAll() {
    const campgrounds = await this.campgroundsService.findAll();
    return { campgrounds, docTitle: "All campgrounds" };
  }

  @Get("/new")
  @Page("campground_new")
  async addNew() {
    return { docTitle: "add new campground" };
  }

  @Get(":id")
  @Page("campground")
  async findOne(@Param("id") id: string) {
    const { location, description, title, price, image, _id, reviews } =
      await this.campgroundsService.findOne(id);
    return {
      location,
      description,
      title,
      price,
      image,
      _id,
      reviews,
      docTitle: "One campground ",
    };
  }

  @Get(":id/edit")
  @Page("campground_update")
  async updateCamp(@Param("id") id: string) {
    const { location, description, title, price, image, _id } =
      await this.campgroundsService.findOne(id);
    return { location, description, title, price, image, _id, docTitle: "update One campground " };
  }

  @Put(":id")
  @Redirect()
  async update(@Param("id") id: string, @Body() updateCampgroundDto: UpdateCampgroundDto) {
    const { _id } = await this.campgroundsService.update(id, updateCampgroundDto);
    return { url: `/campgrounds/${_id}` };
  }

  @Delete(":id")
  @Redirect("/campgrounds", 301)
  async remove(@Param("id") id: string) {
    await this.campgroundsService.remove(id);
  }
}
