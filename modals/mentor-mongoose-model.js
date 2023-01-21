const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  approvedMentees: [
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

  pendingMentees: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],

  experience: [
    {
      companyName: String,
      startDate: Date,
      endDate: Date,
      current: Boolean,
      description: String,
    },
  ],
});

module.exports = mentorSchema;
