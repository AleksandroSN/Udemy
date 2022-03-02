import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "@shared/guards";

export function isLogged() {
  return applyDecorators(UseGuards(AuthenticatedGuard));
}
