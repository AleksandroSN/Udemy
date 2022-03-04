import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { LOCAL_STRATEGY } from "@shared";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, LOCAL_STRATEGY) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string) {
    const result = await this.authService.validateUser(username, password);
    if (result.user === false) {
      throw new UnauthorizedException(result.error);
    }
    return result;
  }
}
