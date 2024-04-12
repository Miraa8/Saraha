import { Message } from "../../DB/models/message.model.js";
import { User } from "../../DB/models/user.model.js";
import cloudinary from "../utils/cloud.js";

export const messageController = async (req, res) => {
  if (!req.session.isLoggedIn) return res.redirect("/login");
  let fullUrl =
    req.protocol + "://" + req.get("host") + "/user/" + req.session.userId;
  const messages = await Message.find({ user: req.session.userId });
  const user = await User.findById(req.session.userId);
  res.render("message.ejs", {
    session: req.session,
    fullUrl,
    messages,
    pic: user.picture.url,
  });
};
export const profilePic = async (req, res) => {
  const id = req.session.userId;
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: "Saraha",
    }
  );
  await User.findByIdAndUpdate(id, {
    picture: { url: secure_url, id: public_id },
  });
  res.redirect("/message");
};
