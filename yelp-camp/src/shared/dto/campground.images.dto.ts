import { IsString } from "class-validator";

interface CampgroundImages {
  url: string;
  path: string;
}

export class CampgroundImagesDTO implements CampgroundImages {
  @IsString()
  path: string;

  @IsString()
  url: string;
}
