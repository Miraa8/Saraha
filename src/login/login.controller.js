import session from "express-session";
import { User } from "../../DB/models/user.model.js";
import Joi from "joi";

export const loginController = (req, res) => {
  res.render("login.ejs", {
    error: req.query?.error,
    session: undefined,
    err: req.flash("info"),
  });
};
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
export const handleLogin = async (req, res) => {
  let { error } = loginSchema.validate(req.body, { abortEarly: false });
  if (!error?.details) {
    const user = await User.findOne({
      password: req.body.password,
      email: req.body.email,
    });
    if (!user) return res.redirect("/login?error=invalid email or password");
    req.session.isLoggedIn = true;
    req.session.userId = user._id;
    req.session.userName = user.name;
    return res.redirect("/message");
  }
  req.flash("info", error?.details);
  return res.redirect("login");
};
