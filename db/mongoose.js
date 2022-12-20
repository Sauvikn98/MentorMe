const mongoose = require("mongoose");
const { remote_db } = require("../config.js");
const URL = "mongodb://127.0.0.1:27017/MentifyMe";


//replace URL with remote_db
mongoose.connect(remote_db,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log(e);
});