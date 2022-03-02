import { applyDecorators, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "@shared/guards";

export function LocalAuth() {
  return applyDecorators(UseGuards(LocalAuthGuard));
}
