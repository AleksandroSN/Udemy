import { UsersService } from "@modules/users";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(username: string, password: string) {
    return this.userService.authenticateUser(username, password);
  }
}
