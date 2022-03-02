import { RedirectError } from "@errors";
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { CampgroundRepository } from "@repositories/campgrounds.repository";
import { Observable } from "rxjs";

@Injectable()
export class AuthorInterceptor implements NestInterceptor {
  constructor(private readonly campgroundRepository: CampgroundRepository) {}

  async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { campId } = request.params;
    const { user } = request.user;
    const campground = await this.campgroundRepository.findOne(campId);

    if (!campground.author.equals(user._id)) {
      request.flash("error", "You don't have permissions");
      throw new RedirectError(302, `/campgrounds/${campId}`);
    }

    return next.handle();
  }
}
