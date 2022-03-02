import { AuthorInterceptor } from "@interceptors";
import { applyDecorators, UseInterceptors } from "@nestjs/common";

export function isAuthor() {
  return applyDecorators(UseInterceptors(AuthorInterceptor));
}
