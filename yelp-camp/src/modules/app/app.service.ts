import { Injectable } from "@nestjs/common";
// import { UsersRepository } from "@repositories/users.repository";

// const fakeUser = {
//   login: "test",
//   email: "email@email.com",
//   password: "qwerty",
// };
@Injectable()
export class AppService {
  // constructor(private readonly userRepository: UsersRepository) {}

  async getHello() {
    // const user = await this.userRepository.create(fakeUser);
    const user = {
      name: "Vasya",
    };
    return user;
  }
}
