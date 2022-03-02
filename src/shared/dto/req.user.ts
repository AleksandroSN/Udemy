import { IsString } from "class-validator";

interface ReqUser {
  _id: string;
  email: string;
  username: string;
}

export class ReqUserDTO implements ReqUser {
  @IsString()
  _id: string;

  @IsString()
  email: string;

  @IsString()
  username: string;
}
