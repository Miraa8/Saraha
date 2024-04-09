import { User } from "../../DB/models/user.model.js"

export const loginController = (req,res)=>{
res.render('login.ejs',{error:req.query?.error})
}
export const handleLogin = async(req,res)=>{
const user = await User.findOne({password: req.body.password,email:req.body.email})
if(!user) return res.redirect('/login?error=invalid email or password')
req.session.isLoggedIn = true;
req.session.userId = user._id;
req.session.userName = user.name;
res.redirect("/message")
}