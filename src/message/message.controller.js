export const messageController = (req,res)=>{
    console.log(req.session);
if(!req.session.isLoggedIn) return res.redirect('/login')
res.render('message.ejs')
}