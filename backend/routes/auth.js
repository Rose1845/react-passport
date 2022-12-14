const express = require('express')
const router = express.Router()


const passport= require('passport')

const CLIENT_URL ="http://localhost:3000/"

router.get("/login/success",(req,res)=>{
    if(req.user){
        res.status(200).json({
            success:true,
            message:"successfully logged in",
            user:req.user,
            // cookies:req.cookies
        })

    }
    
})
router.get("/login/failed",(req,res)=>{
    res.status(404).json({
        success:false,
        message:"failure"
    })
})

router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect(CLIENT_URL)
})
// router.get('/logout', function(req, res, next) {
//     req.logout(function(err) {
//       if (err) { return next(err); }
//       res.redirect(CLIENT_URL);
//     });
//   });
  
router.get('/google',
  passport.authenticate('google', { scope:['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login/failed', successRedirect:CLIENT_URL,}),
  
);

module.exports = router