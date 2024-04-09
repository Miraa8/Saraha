import { User } from "../../DB/models/user.model.js";

export const registerController = (req, res) => {
  res.render("register.ejs",{error:req.query?.error});
};
export const handleRegister = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user)return res.redirect("/register?error= user already exists");
  User.insertMany(req.body);
  res.redirect("login");
};
