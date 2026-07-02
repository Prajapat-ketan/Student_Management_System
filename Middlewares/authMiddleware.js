const jwt = require("jsonwebtoken");
const authUserMiddleware = async(req,res,next)=>{
     const token = req.cookies.token;
     if(!token){
       req.flash("error","You are not Loggged In");
       return res.redirect("/api/sms/user/signin");
     }
     const verifiedUser = jwt.verify(token,process.env.JWT_SECRET_KEY);
     if(!verifiedUser){
        req.flash("error","You are not authorized");
        return res.redirect("/api/sms/user/signin");
     }
     req.user = verifiedUser;
     res.locals.user = req.user;
     console.log(req.user);
     next();
};


module.exports = authUserMiddleware;