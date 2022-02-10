import { Injectable } from "@nestjs/common";
import { CampgroundRepository } from "./campgrounds.repository";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

@Injectable()
export class CampgroundsService {
  constructor(private readonly campgroundRepository: CampgroundRepository) {}

  async create(createCampgroundDto: CreateCampgroundDto) {
    return this.campgroundRepository.create(createCampgroundDto);
  }

  async findAll() {
    return this.campgroundRepository.findAll();
  }

  async findOne(id: string) {
    return this.campgroundRepository.findOne(id);
  }

  async update(id: string, updateCampgroundDto: UpdateCampgroundDto) {
    return this.campgroundRepository.update(id, updateCampgroundDto);
  }

  async remove(id: string) {
    return this.campgroundRepository.remove(id);
  }

  async seedData(createCampgroundDto: CreateCampgroundDto[]) {
    return this.campgroundRepository.seedData(createCampgroundDto);
  }
}
