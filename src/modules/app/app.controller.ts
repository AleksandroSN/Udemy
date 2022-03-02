import { Controller, Get } from "@nestjs/common";
import { Page } from "@shared";

@Controller()
export class AppController {
  @Get()
  @Page("home")
  async getHello() {
    return { docTitle: "Home page" };
  }
}
