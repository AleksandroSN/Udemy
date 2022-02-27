import { CreateCampgroundDto, UpdateCampgroundDto } from "@modules/campgrounds/dto";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Campground, CampgroundDocument } from "@schemas/campground.schema";
import { User } from "@schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class CampgroundRepository {
  constructor(
    @InjectModel(Campground.name) private readonly campgroundModel: Model<CampgroundDocument>,
  ) {}

  async create(createCampgroundDto: CreateCampgroundDto, author: User) {
    try {
      const campground = new this.campgroundModel({ ...createCampgroundDto, author });
      const result = await campground.save();
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async seedData(createCampgroundDto: CreateCampgroundDto[]) {
    try {
      const campgrounds = await this.campgroundModel.insertMany(createCampgroundDto);
      return campgrounds;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    const allCampgrounds = await this.campgroundModel.find();
    return allCampgrounds;
  }

  async findOne(id: string) {
    const campground = await this.campgroundModel
      .findById(id)
      .populate("reviews")
      .populate("author");
    if (!campground) {
      throw new NotFoundException("", "Campground not found");
    }
    return campground;
  }

  async update(id: string, updateCampgroundDto: UpdateCampgroundDto | any) {
    const campground = await this.campgroundModel.findByIdAndUpdate(id, updateCampgroundDto);
    if (!campground) {
      throw new NotFoundException("", "Campground not found");
    }
    return campground;
  }

  async remove(id: string) {
    const deleteResult = await this.campgroundModel.findByIdAndDelete(id);
    return deleteResult;
  }
}
