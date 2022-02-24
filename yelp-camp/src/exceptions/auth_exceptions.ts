import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  UnauthorizedException,
} from "@nestjs/common";
import { LOGIN_PAGE } from "@shared";

@Catch(HttpException)
export class AuthException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof UnauthorizedException || exception instanceof ForbiddenException) {
      request.flash("error", "Please login or register");
      response.redirect(LOGIN_PAGE);
    }
  }
}
