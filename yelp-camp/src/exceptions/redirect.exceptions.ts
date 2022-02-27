import { RedirectError } from "@errors";
import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch(RedirectError)
export class RedirectFilter implements ExceptionFilter {
  catch(exception: RedirectError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    return response.redirect(exception.status, exception.url);
  }
}
