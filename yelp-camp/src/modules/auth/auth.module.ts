import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "@modules/users";
import { LOCAL_STRATEGY } from "@shared";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { SessionSerializer } from "./serializers";
import { LocalStrategy } from "./strategies";

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: LOCAL_STRATEGY, session: true }),
  ],
  controllers: [AuthController],
  providers: [AuthService, SessionSerializer, LocalStrategy],
})
export class AuthModule {}
