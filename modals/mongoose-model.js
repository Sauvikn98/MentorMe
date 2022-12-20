const { mongoose } = require("mongoose");
const userSchema = require("./user-mongoose-model");
const mentorSchema = require("./mentor-mongoose-model");
const menteeSchema = require("./mentee-mongoose-model");



const User = mongoose.model("user",userSchema);

const mentor = User.discriminator("mentor", mentorSchema);
const mentee = User.discriminator("mentee", menteeSchema);






module.exports = {
  User,
  mentee,
  mentor,
};
