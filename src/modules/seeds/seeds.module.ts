import { CampgroundsModule, CampgroundsSeed } from "@modules/campgrounds";
import { Module } from "@nestjs/common";
import { CommandModule } from "nestjs-command";

@Module({
  imports: [CommandModule, CampgroundsModule],
  providers: [CampgroundsSeed],
})
export class SeedModule {}
