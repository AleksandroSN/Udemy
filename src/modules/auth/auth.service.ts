import { UsersService } from "@modules/users";
import { Injectable } from "@nestjs/common";
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(username: string, password: string) {
    return this.userService.authenticateUser(username, password);
  }
}
