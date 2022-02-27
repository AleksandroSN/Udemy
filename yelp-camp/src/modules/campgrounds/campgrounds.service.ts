import { Injectable } from "@nestjs/common";
import { UsersRepository } from "@repositories/users.repository";
import { ReqUserDTO } from "@shared";
import { CampgroundRepository } from "@repositories/campgrounds.repository";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

@Injectable()
export class CampgroundsService {
  constructor(
    private readonly campgroundRepository: CampgroundRepository,
    private readonly userRepository: UsersRepository,
  ) {}

  async create(createCampgroundDto: CreateCampgroundDto, reqUser: ReqUserDTO) {
    const author = await this.userRepository.findOne(reqUser._id);
    return this.campgroundRepository.create(createCampgroundDto, author);
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
