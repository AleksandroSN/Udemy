import { CreateUserDto } from "@modules/users/dto/create-user.dto";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "@schemas/user.schema";
import { PassportLocalModel } from "mongoose";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: PassportLocalModel<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel({
      email: createUserDto.email,
      username: createUserDto.username,
    });
    const newUser = await this.userModel.register(user, createUserDto.password);
    return newUser;
  }

  async serialize() {
    return this.userModel.serializeUser();
  }

  async deserialize() {
    return this.userModel.deserializeUser();
  }

  async authenticate(username: string, password: string) {
    const authenticateMethod = this.userModel.authenticate();
    const user = await authenticateMethod(username, password);
    return user;
  }
}
