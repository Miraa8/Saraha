import { User } from "../../DB/models/user.model.js"

export const loginController = (req,res)=>{
res.render('login.ejs',{error:req.query?.error})
}
export const handleLogin = async(req,res)=>{
const user = await User.findOne({password: req.body.password,email:req.body.email})
if(!user) return res.redirect('/login?error=invalid email or password')
res.redirect("/message")
}