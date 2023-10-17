const router = require("express").Router();
const passport = require("passport");

//COMMENT: Passport Routes
router.get("/login/success", (req,res)=>{
    if(req.user){
        res.status(200).json({
            error:false,
            message: "Login Successful",
            user: req.user,
        })
        
    } else {
        res.status(403).json({error: true, message: "Not Authorized: Does not Exist"});
    }
})


router.get("/login/failed", (req,res)=>{
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
})

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

router.get(("/google", passport.authenticate("google", ["profile", "email"])));

router.get(("/logout", (req, res)=>{
    req.logout();
    res.redirect(process.env.CLIENT_URL);

}))

//COMMENT: export below

module.export = router;