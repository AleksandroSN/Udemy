import { IsNumber, IsString } from "class-validator";

interface CampgroundLocation {
  type: string;
  coordinates: number[];
}

export class CampgroundLocationDTO implements CampgroundLocation {
  @IsString()
  type: string;

  @IsNumber({}, { each: true })
  coordinates: number[];
}
