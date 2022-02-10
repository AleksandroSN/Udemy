import { PartialType } from "@nestjs/mapped-types";
import { CreateCampgroundDto } from "./create-campground.dto";

export class UpdateCampgroundDto extends PartialType(CreateCampgroundDto) {}
