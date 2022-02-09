import { Controller, Get } from "@nestjs/common";
import { TestService } from "./test.service";

@Controller("test")
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getAll() {
    const test = this.testService.findAll();
    console.log("SUCCESS");
    return test;
  }
}
