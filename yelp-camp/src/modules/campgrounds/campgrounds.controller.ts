import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  Res,
} from "@nestjs/common";
import { Page } from "@shared";
import { CampgroundsService } from "./campgrounds.service";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

@Controller("campgrounds")
export class CampgroundsController {
  constructor(private readonly campgroundsService: CampgroundsService) {}

  @Post()
  async create(@Body() createCampgroundDto: CreateCampgroundDto, @Res() res) {
    const campground = await this.campgroundsService.create(createCampgroundDto);
    res.redirect(`/campgrounds/${campground._id}`);
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
  async findOne(@Param("id", ParseUUIDPipe) id: string) {
    const { location, description, title, price, _id } = await this.campgroundsService.findOne(id);
    return { location, description, title, price, _id, docTitle: "One campground " };
  }

  @Get(":id/edit")
  @Page("campground_update")
  async updateCamp(@Param("id", ParseUUIDPipe) id: string) {
    const { location, description, title, price, _id } = await this.campgroundsService.findOne(id);
    return { location, description, title, price, _id, docTitle: "update One campground " };
  }

  @Put(":id")
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateCampgroundDto: UpdateCampgroundDto,
    @Res() res,
  ) {
    const updateCampGround = await this.campgroundsService.update(id, updateCampgroundDto);
    res.redirect(`/campgrounds/${updateCampGround._id}`);
  }

  @Delete(":id")
  async remove(@Param("id", ParseUUIDPipe) id: string, @Res() res) {
    await this.campgroundsService.remove(id);
    res.redirect("/campgrounds");
  }
}
