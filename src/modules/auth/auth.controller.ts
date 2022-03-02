import { Controller, Get, Post, Redirect, Req, Session } from "@nestjs/common";
import { CAMPGROUNDS_PAGE, LocalAuth, LOGIN_PAGE, Page } from "@shared";
import { Session as ExpSession } from "express-session";

interface SessionWithRedirect extends ExpSession {
  returnTo: string;
}

@Controller()
export class AuthController {
  @Post("/login")
  @LocalAuth()
  @Redirect()
  login(@Req() req, @Session() session: SessionWithRedirect) {
    if (req.user.error) {
      const { user } = req;
      const { error } = user;
      req.flash("error", error.message);
      return { url: LOGIN_PAGE };
    }
    const redirectUrl = session.returnTo || CAMPGROUNDS_PAGE;
    req.flash("success", "Heeeelo");
    return { url: redirectUrl };
  }

  @Get("/login")
  @Page("login")
  renderLogin() {
    return { docTitle: "Login page" };
  }

  @Get("/logout")
  @Redirect(CAMPGROUNDS_PAGE)
  logout(@Req() req) {
    req.flash("success", "Bye bye");
    req.logout();
  }
}
