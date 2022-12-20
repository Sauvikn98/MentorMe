const mongoose= require('mongoose');





//SCHEMA FOR THE MENTOR
const menteeSchema= new mongoose.Schema({
  
    followedMentors: [
        {
         mentorId: String
        },
      ],
      questions: [
        {
         questionId: String
        },
      ]

    
});

module.exports=menteeSchema ;