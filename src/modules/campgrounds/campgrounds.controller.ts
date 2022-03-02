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
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const { _id } = await this.campgroundsService.create(createCampgroundDto, reqUser, files);
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

  @Get(":campId")
  @Page("campground")
  async findOne(@Param("campId") id: string) {
    const campground = await this.campgroundsService.findOne(id);
    return {
      campground,
      docTitle: "One campground ",
    };
  }

  @Get(":campId/edit")
  @isLogged()
  @isAuthor()
  @Page("campground_update")
  async updateCamp(@Param("campId") id: string) {
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

  @Put(":campId")
  @isLogged()
  @isAuthor()
  @Redirect()
  async update(
    @Param("campId") id: string,
    @Body() updateCampgroundDto: UpdateCampgroundDto,
    @Req() req,
  ) {
    const { _id } = await this.campgroundsService.update(id, updateCampgroundDto);
    req.flash("success", "Succesfully updated Camp");
    return { url: `/campgrounds/${_id}` };
  }

  @Delete(":campId")
  @isLogged()
  @isAuthor()
  @Redirect("/campgrounds", 301)
  async remove(@Param("campId") id: string) {
    await this.campgroundsService.remove(id);
  }
}
