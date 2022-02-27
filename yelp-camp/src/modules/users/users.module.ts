import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "@schemas/user.schema";
import { UsersRepository } from "@repositories/users.repository";
import * as passportLocalMongoose from "passport-local-mongoose";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(passportLocalMongoose);
          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
