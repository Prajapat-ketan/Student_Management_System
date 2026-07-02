const express = require("express");
const router = express.Router();
const {signupform,signup,signinform,signin,signout}= require("../controller/userController");
const {joiUserSignupSchema,joiUserSigninSchema} = require("../joiSchema");
const {joiUserSignupMiddleware,joiUserSigninMiddleware} = require("../Middlewares/joiMiddleware");
const authUserMiddleware = require("../Middlewares/authMiddleware");


router.get("/",signupform);
router.post("/signup",joiUserSignupMiddleware(joiUserSignupSchema),signup);
router.get("/signin",signinform);
router.post("/signin",joiUserSigninMiddleware(joiUserSigninSchema),signin);
router.get("/signout",authUserMiddleware,signout);
module.exports = router;


