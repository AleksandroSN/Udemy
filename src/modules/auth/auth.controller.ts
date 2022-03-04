import { Controller, Get, Post, Redirect, Req, Session } from "@nestjs/common";
import { CAMPGROUNDS_PAGE, LocalAuth, Page } from "@shared";
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
    const redirectUrl = session.returnTo || CAMPGROUNDS_PAGE;
    req.flash("success", "Heeeelo");
    // eslint-disable-next-line no-param-reassign
    session.returnTo = "";
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
