import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello() {
    const user = { name: "Vasya" };
    return { user };
  }
}
