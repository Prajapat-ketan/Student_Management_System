
const joiStudentMiddleware = (joiStudentSchema)=>{
    return (req,res,next)=>{
      const {error, value} = joiStudentSchema.validate(req.body,{abortEarly : false, stripUnknown : true});
      if(error){
         const errmessages = error.details.map(detail=>detail.message);
        //  return res.status(400).json({errors:errmessages});
        console.log(errmessages);
        req.flash("error",errmessages);
        return res.redirect("student/addform");
      }else{
      req.body = value;
      next();
      }
    };
};

const joiUserSignupMiddleware = (joiUserSignupSchema)=>{
    return (req,res,next)=>{
      const {error, value} = joiUserSignupSchema.validate(req.body,{abortEarly : false, stripUnknown : true});
      if(error){
         const errmessages = error.details.map(detail=>detail.message);
        //  return res.status(400).json({errors:errmessages});
        req.flash("error",errmessages);
        return res.redirect("/api/sms/user");
      }
      req.body = value;
      next();
      
    };
};
const joiUserSigninMiddleware = (joiUserSigninSchema)=>{
    return (req,res,next)=>{
      const {error, value} = joiUserSigninSchema.validate(req.body,{abortEarly : false, stripUnknown : true});
      if(error){
         const errmessages = error.details.map(detail=>detail.message);
        //  return res.status(400).json({errors:errmessages});
        console.log(errmessages);
        req.flash("error",errmessages);
        return res.redirect("/api/sms/user/signin");
      }
      req.body = value;
      next();
      
    };
};


module.exports = {joiStudentMiddleware,joiUserSignupMiddleware,joiUserSigninMiddleware};