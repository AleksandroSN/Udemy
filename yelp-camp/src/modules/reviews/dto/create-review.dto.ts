import { IsNotEmpty, IsString } from "class-validator";

export class CreateReviewDto {
  @IsString()
  @IsNotEmpty()
  body: string;

  @IsString()
  rating: string;
}
