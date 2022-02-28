import { Injectable } from "@nestjs/common";
import { CloudinaryService } from "@modules/cloudinary";
import { UsersRepository } from "@repositories/users.repository";
import { CampgroundImagesDTO, ReqUserDTO } from "@shared";
import { CampgroundRepository } from "@repositories/campgrounds.repository";
import { CreateCampgroundDto } from "./dto/create-campground.dto";
import { UpdateCampgroundDto } from "./dto/update-campground.dto";

@Injectable()
export class CampgroundsService {
  constructor(
    private readonly campgroundRepository: CampgroundRepository,
    private readonly userRepository: UsersRepository,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(
    createCampgroundDto: CreateCampgroundDto,
    reqUser: ReqUserDTO,
    files: Express.Multer.File[],
  ) {
    const urls = files.map((file) => this.cloudinaryService.uploadImage(file, "YelpCamp"));
    const result = await Promise.all(urls);
    const campImages: CampgroundImagesDTO[] = result.map((response) => ({
      url: response.secure_url,
      path: response.public_id,
    }));
    const author = await this.userRepository.findOne(reqUser._id);
    const campground = await this.campgroundRepository.create(
      createCampgroundDto,
      author,
      campImages,
    );
    return campground;
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
