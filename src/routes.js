// src/routes/index.js
import homeRouter from "./home/home.routes.js";
import registerRouter from "./register/register.routes.js";
import loginRouter from "./login/login.routes.js";
import messageRouter from "./message/message.routes.js";
import userRouter from "./user/user.routes.js";
import session from "express-session";
import MongoSession from "connect-mongodb-session";
import flash from "connect-flash";
import dotenv from "dotenv";
import express, { urlencoded } from "express";
export function setupRoutes(app) {
  dotenv.config();
  app.use(express.static("public"));
  app.use(urlencoded({ extended: true }));
  const MongoDBStore = MongoSession(session);
  const store = new MongoDBStore({
    uri: process.env.DB_URI,
    collection: "mySessions",
  });
  app.use(
    session({
      secret: "keyboard cat ghjn",
      resave: false,
      saveUninitialized: true,
      store,
      // cookie: { secure: true },
    })
  );
  app.use(flash());
  app.use(homeRouter);
  app.use(registerRouter);
  app.use(loginRouter);
  app.use(messageRouter);
  app.use(userRouter);

  app.get("/logout", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  });
}
