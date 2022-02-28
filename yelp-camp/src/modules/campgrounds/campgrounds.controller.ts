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
  UploadedFiles,
} from "@nestjs/common";
import { isAuthor, isLogged, Page, ReqUserDTO, Uploader, User } from "@shared";
import { CampgroundsService } from "./campgrounds.service";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";
// import {} from "clou"

@Controller("campgrounds")
export class CampgroundsController {
  constructor(private readonly campgroundsService: CampgroundsService) {}

  @Post()
  @isLogged()
  @Uploader("images")
  @Redirect()
  async create(
    @Body() createCampgroundDto: CreateCampgroundDto,
    @Req() req,
    @User("user") reqUser: ReqUserDTO,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
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
    const { location, description, title, price, images, _id, reviews, author } =
      await this.campgroundsService.findOne(id);
    return {
      location,
      description,
      title,
      price,
      images,
      _id,
      reviews,
      author,
      docTitle: "One campground ",
    };
  }

  @Get(":id/edit")
  @isLogged()
  @isAuthor()
  @Page("campground_update")
  async updateCamp(@Param("id") id: string) {
    const { location, description, title, price, images, _id, author } =
      await this.campgroundsService.findOne(id);
    return {
      location,
      description,
      title,
      price,
      images,
      _id,
      author,
      docTitle: "update One campground ",
    };
  }

  @Put(":id")
  @isLogged()
  @isAuthor()
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
  @isAuthor()
  @Redirect("/campgrounds", 301)
  async remove(@Param("id") id: string) {
    await this.campgroundsService.remove(id);
  }
}
