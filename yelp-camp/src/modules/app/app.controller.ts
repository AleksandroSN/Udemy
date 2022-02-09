import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Page } from "../../shared";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Page("home")
  getHello() {
    return this.appService.getHello();
  }
}
