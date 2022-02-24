import { Injectable } from "@nestjs/common";
import { UsersRepository } from "@repositories/users.repository";
import { CreateUserDto } from "./dto/create-user.dto";
// import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async serializeUser() {
    return this.userRepository.serialize();
  }

  async deserializeUser() {
    return this.userRepository.deserialize();
  }

  async authenticateUser(username: string, password: string) {
    return this.userRepository.authenticate(username, password);
  }
}
