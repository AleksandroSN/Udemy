import { join } from "path";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Logger } from "@nestjs/common";
import { AppModule } from "@modules";
import methodOverride from "method-override";
import session from "express-session";
import MongoStore from "connect-mongo";
import ejsMate from "ejs-mate";
import flash from "connect-flash";
import passport from "passport";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import { CONNECT_SRC_URLS, IMGS_SRC_URLS, SCRIPT_SRC_URLS, STYLE_SRC_URLS } from "@shared";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT || 3000;
  const SESSION_SECRET = process.env.SESSION_SECRET || "my-secret";
  const MONGO_URL = process.env.MONGO_DB_URI || "";
  const HOST = "0.0.0.0";

  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.engine("ejs", ejsMate);
  app.setViewEngine("ejs");
  app.use(methodOverride("_method"));
  app.use(mongoSanitize());

  const store = MongoStore.create({
    mongoUrl: MONGO_URL,
    autoRemove: "interval",
    autoRemoveInterval: 60,
    crypto: {
      secret: SESSION_SECRET,
    },
  });

  app.use(
    session({
      store,
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: true,
        httpOnly: true,
        sameSite: "none",
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.use((req, res, next) => {
    res.locals.currentUser = req.user ?? undefined;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
  });

  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      crossOriginResourcePolicy: {
        policy: "cross-origin",
      },
    }),
  );
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: [],
        connectSrc: ["'self'", ...CONNECT_SRC_URLS],
        scriptSrc: ["'unsafe-inline'", "'self'", ...SCRIPT_SRC_URLS],
        styleSrc: ["'self'", "'unsafe-inline'", ...STYLE_SRC_URLS],
        workerSrc: ["'self'", "blob:"],
        childSrc: ["blob:"],
        objectSrc: [],
        imgSrc: [
          "'self'",
          "blob:",
          "data:",
          `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/`,
          ...IMGS_SRC_URLS,
        ],
        fontSrc: ["'self'"],
      },
    }),
  );

  await app.listen(PORT, HOST, () => {
    Logger.log(`Nest listening on http://${HOST}:${PORT}`, "Bootstrap");
  });
}
bootstrap();
