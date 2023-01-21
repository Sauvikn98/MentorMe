const mongoose = require("mongoose");

//SCHEMA FOR THE MENTEE
const menteeSchema = new mongoose.Schema({
  approvedMentors: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      name: {
        type: String,
      },
    },
  ],

  pendingMentors: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      name: {
        type: String,
      },
    },
  ],
});

module.exports = menteeSchema;
