const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
          await mongoose.connect(process.env.MONGO_URL);
          console.log("database Connected Succesfully");
    } catch(error){
        console.log(error);
    }
}

module.exports = connectDb;