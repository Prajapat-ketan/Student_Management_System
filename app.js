const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const studentRouter = require("./routes/studentRoute");
const userRouter = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db");
require("dotenv").config();
connectDb();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.use(session({
    secret : "my secret",
    resave : false,
    saveUninitialized : true
}));
app.use(flash());
app.use((req,res,next)=>{
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  res.locals.user = req.user || "";
  console.log(req.user);
  next();
});

app.use(methodOverride("_method"));

app.get("/api/sms",(req,res)=>{
    res.render("home.ejs");
});
app.use("/api/sms/student",studentRouter);
app.use("/api/sms/user",userRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server is listening at the port ${process.env.PORT}`);
});