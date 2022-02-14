import { Catch, NotFoundException, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { PATH_TO_404_PAGE } from "@shared";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(404).render(PATH_TO_404_PAGE, { message: exception.message });
  }
}
