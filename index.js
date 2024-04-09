import express, { urlencoded } from "express";
import { connectDB } from "./DB/connection.js";
import homeRouter from "./src/home/home.routes.js";
import registerRouter from "./src/register/register.routes.js";
import loginRouter from "./src/login/login.routes.js";
import messageRouter from "./src/message/message.routes.js";
import userRouter from "./src/user/user.routes.js";
import session from "express-session";
import MongoSession from "connect-mongodb-session";
const MongoDBStore = MongoSession(session);
var store = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017/Saraha",
  collection: "mySessions",
});
const port = process.env.PORT || 3000;
const app = express();
connectDB();
app.use(express.static("public"));
app.use(urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat ghjn",
    resave: false,
    saveUninitialized: true,
    store
    // cookie: { secure: true },
  })
);
app.use(homeRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(messageRouter);
app.use(userRouter);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
