import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";
import { Campground, CampgroundDocument } from "./schemas/campground.schema";

@Injectable()
export class CampgroundRepository {
  constructor(
    @InjectModel(Campground.name) private readonly campgroundModel: Model<CampgroundDocument>,
  ) {}

  async create(createCampgroundDto: CreateCampgroundDto) {
    try {
      const campground = new this.campgroundModel(createCampgroundDto);
      const result = await campground.save();
      return result;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    const allCampgrounds = await this.campgroundModel.find({});
    if (!allCampgrounds) {
      throw new NotFoundException("", "Campground not found");
    }
    return allCampgrounds;
  }

  async findOne(id: string) {
    const campground = await this.campgroundModel.findById(id);
    if (!campground) {
      throw new NotFoundException("", "Campground not found");
    }
    return campground;
  }

  async update(id: string, updateCampgroundDto: UpdateCampgroundDto) {
    const campground = await this.campgroundModel.findByIdAndUpdate(id, updateCampgroundDto);
    if (!campground) {
      throw new NotFoundException("", "Campground not found");
    }
    return campground;
  }

  async remove(id: string) {
    const deleteResult = await this.campgroundModel.remove(id);
    return deleteResult;
  }
}
