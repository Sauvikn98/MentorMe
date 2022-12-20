const mongoose = require("mongoose");


const mentorSchema = new mongoose.Schema({
  followingMentees: [
    {
     menteeId: String
    
    },
  ],
  posts: [
    {
  
    postId: String
   
    },
  ],
  experience:[{
   name: String,
   duration : Date,

  }],
});

 module.exports=  mentorSchema;

 