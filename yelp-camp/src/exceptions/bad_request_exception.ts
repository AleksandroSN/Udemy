import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from "@nestjs/common";
import { PATH_TO_ERROR_PAGE } from "@shared";

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response
      .status(400)
      .render(PATH_TO_ERROR_PAGE, { error: JSON.stringify(exception.getResponse()) });
  }
}
