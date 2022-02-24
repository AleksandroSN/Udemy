import { BadRequestException, Body, Controller, Get, Post, Redirect, Req } from "@nestjs/common";
import { CAMPGROUNDS_PAGE, Page, REGISTER_PAGE } from "@shared";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/register")
  @Redirect()
  async create(@Body() createUserDto: CreateUserDto, @Req() req) {
    try {
      const newUser = await this.usersService.create(createUserDto);
      req.login(newUser, (err) => {
        if (err) throw new BadRequestException();
        req.flash("success", "Welcome to YelpCamp");
      });
      return { url: CAMPGROUNDS_PAGE };
    } catch (error) {
      req.flash("error", error.message);
      return { url: REGISTER_PAGE };
    }
  }

  @Get("/register")
  @Page("register")
  registerUser() {
    return {
      docTitle: "Register new user",
    };
  }
}
