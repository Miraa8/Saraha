import { Message } from "../../DB/models/meassage.model.js";

export const messageController = async(req,res)=>{
if(!req.session.isLoggedIn) return res.redirect("/login");
let fullUrl = req.protocol + "://" + req.get("host") + "/user/"+ req.session.userId;
const messages = await Message.find({user:req.session.userId})
res.render('message.ejs',{session:req.session,fullUrl,messages})
}