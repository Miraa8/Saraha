import { Message } from "../../DB/models/meassage.model.js";
import { User } from "../../DB/models/user.model.js";
import Joi from "joi";
export const userController = async (req, res) => {
  const user = await User.findById(req.params.id);
  const flashInfo = req.flash("info");
  const err= flashInfo.length > 0 ? flashInfo : undefined;
  res.render("user.ejs", { session: undefined, userId: req.params.id,userName:user.name,err });
};
export const messageSchema = Joi.object({
  message: Joi.string().required(),
});
export const handleUser = async(req, res) => {
  let { error } = messageSchema.validate(req.body);
  if (!error?.details) {
   await Message.insertMany({ user: req.params.id, message: req.body.message });
   return res.redirect(`/user/${req.params.id}`);
  }
  req.flash("info", error.details[0].message);
  return res.redirect(`/user/${req.params.id}`);
    
};
