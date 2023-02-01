const mongoose = require("mongoose");

//SCHEMA FOR THE MENTEE POST
const menteePostSchema = new mongoose.Schema({
  targetMentor: 
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      name: {
        type: String,
      },
    }
  
});

module.exports = menteePostSchema;
