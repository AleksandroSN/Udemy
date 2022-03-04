import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  UnauthorizedException,
} from "@nestjs/common";
import { LOGIN_PAGE, PATH_TO_ERROR_PAGE } from "@shared";

@Catch(HttpException)
export class AuthException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof UnauthorizedException || exception instanceof ForbiddenException) {
      const { message } = exception;
      request.flash("error", message);
      response.redirect(LOGIN_PAGE);
    } else {
      response
        .status(400)
        .render(PATH_TO_ERROR_PAGE, { error: JSON.stringify(exception.getResponse()) });
    }
  }
}
