const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const signupform = (req, res) => {
   res.render("userviews/signupform.ejs");
};

const signup = async (req, res) => {
   const user = req.body.user;
   const existUser = await userModel.findOne({ email: user.email });
   if (existUser) {
      req.flash("error", "User is already Registered, Please Sign in!");
      return res.redirect("/api/sms/user/signin");
      
   }
   const hashedpassword = await bcrypt.hash(user.password, 10);
   if ((user.usercode).toLowerCase() === "admin123") {
      user.role = "admin";
   }
   else if ((user.usercode).toLowerCase() === "emp123") {
      user.role = "employee";
   }
   else {
      user.role = "student";
   }

   const newuser = await userModel.create({
      username: user.username,
      password: hashedpassword,
      email: user.email,
      role: user.role
   });

   req.flash("success", "User Successfully Registered!");
   res.redirect("/api/sms/user/signin");

};

const signinform = (req, res) => {
   res.render("userviews/signinform.ejs");

};

const signin = async(req, res) => {
  const user = req.body.user;
  const existUser = await userModel.findOne({email:user.email});
  if(!existUser){
     req.flash("error","Please Enter Correct Login Credentials!");
     return res.redirect("/api/sms/user/signin");
  }

  const verified = await bcrypt.compare(user.password,existUser.password);
  if(!verified){
   req.flash("error","Please Enter Correct Login Credentials");
   return res.redirect("/api/sms/user/signin");
  }
  const token = jwt.sign({id:existUser._id,email:existUser.email,role:existUser.role},process.env.JWT_SECRET_KEY,{expiresIn:"1d"});
  res.cookie("token",token,{httpOnly : true});
  res.redirect("/api/sms/student/");
}

const signout = (req,res)=>{
   res.clearCookie("token");
   res.redirect("/api/sms/");
};

module.exports = { signupform, signup, signinform, signin,signout };
