export const messageController = (req,res)=>{
if(!req.session.isLoggedIn) return res.redirect("/login");
res.render('message.ejs',{session:req.session})
}