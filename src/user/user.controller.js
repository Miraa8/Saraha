import { Message } from "../../DB/models/meassage.model.js";
import { User } from "../../DB/models/user.model.js";

export const userController = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("user.ejs", { session: undefined, userId: req.params.id,userName:user.name });
};
export const handleUser = async(req, res) => {
    await Message.insertMany({user:req.params.id,message:req.body.message})
  res.redirect(`/user/${req.params.id}`);
};
