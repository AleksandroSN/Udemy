import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from "@nestjs/common";
import { Page } from "@shared";
import { CampgroundsService } from "./campgrounds.service";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

const campground2 = {
  title: "Bootcamp",
  price: "5000",
  description: "First",
  location: "RF",
};

@Controller("campgrounds")
export class CampgroundsController {
  constructor(private readonly campgroundsService: CampgroundsService) {}

  @Post()
  create(@Body() createCampgroundDto: CreateCampgroundDto) {
    return this.campgroundsService.create(createCampgroundDto);
  }

  @Get()
  @Page("campground")
  findAll() {
    return { ...campground2 };
    // return this.campgroundsService.findAll();
  }

  @Get(":id")
  @Page("campground")
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const { location, description, title, price } = await this.campgroundsService.findOne(id);
    return { location, description, title, price };
  }

  @Patch(":id")
  update(@Param("id", ParseUUIDPipe) id: string, @Body() updateCampgroundDto: UpdateCampgroundDto) {
    return this.campgroundsService.update(id, updateCampgroundDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.campgroundsService.remove(id);
  }
}
