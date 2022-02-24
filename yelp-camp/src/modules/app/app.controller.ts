import { Controller, Get } from "@nestjs/common";
// import { Page } from "@shared";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Page("home")
  async getHello() {
    const user = await this.appService.getHello();
    return { ...user, docTitle: "Home page" };
    // return res.send(user);
  }
}
