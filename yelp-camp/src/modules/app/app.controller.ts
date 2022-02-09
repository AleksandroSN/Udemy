import { Controller, Get } from "@nestjs/common";
import { Page } from "@shared";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Page("home")
  getHello() {
    return this.appService.getHello();
  }
}
