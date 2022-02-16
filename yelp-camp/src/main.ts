import { join } from "path";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Logger } from "@nestjs/common";
import { AppModule } from "@modules";
import * as methodOverride from "method-override";
import * as ejsMate from "ejs-mate";
import * as session from "express-session";
import * as flash from "connect-flash";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT || 3000;
  const SESSION_SECRET = process.env.SESSION_SECRET || "my-secret";
  const HOST = "0.0.0.0";

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.engine("ejs", ejsMate);
  app.setViewEngine("ejs");
  app.use(methodOverride("_method"));
  app.use(
    session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    }),
  );
  app.use(flash());
  app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
  });

  await app.listen(PORT, HOST, () => {
    Logger.log(`Nest listening on http://${HOST}:${PORT}`, "Bootstrap");
  });
}
bootstrap();
