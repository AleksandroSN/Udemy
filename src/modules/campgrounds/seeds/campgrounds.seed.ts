import { Command } from "nestjs-command";
import { Injectable } from "@nestjs/common";
import { CampgroundsService } from "../campgrounds.service";
import { seedData } from "./campgrounds.seed.data";

@Injectable()
export class CampgroundsSeed {
  constructor(private readonly campgroundsService: CampgroundsService) {}

  @Command({ command: "seed:many", describe: "create a many data" })
  async create() {
    await this.campgroundsService.seedData(seedData);
  }
}
