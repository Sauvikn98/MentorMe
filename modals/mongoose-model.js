const { mongoose } = require("mongoose");
const userSchema = require("./user-mongoose-model");
const mentorSchema = require("./mentor-mongoose-model");
const menteeSchema = require("./mentee-mongoose-model");

const User = mongoose.model("user",userSchema);

const Mentor = User.discriminator("mentor", mentorSchema);
const Mentee = User.discriminator("mentee", menteeSchema);


module.exports = {
  User,
  Mentee,
  Mentor,
};
