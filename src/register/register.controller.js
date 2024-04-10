import { User } from "../../DB/models/user.model.js";
import Joi from "joi";

export const registerController = (req, res) => {
  res.render("register.ejs", { error: req.query?.error, session: req.session ,err:req.flash("info")});
};
const registrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
export const handleRegister = async (req, res) => {
  let { error } = registrationSchema.validate(req.body, { abortEarly: false });
  if (!error?.details) {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.redirect("/register?error= user already exists");
    User.insertMany(req.body);
    return res.redirect("login");
  }
  req.flash("info",error?.details);
  return res.redirect("register");

};
