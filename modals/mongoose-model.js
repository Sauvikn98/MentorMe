const { mongoose } = require("mongoose");
const userSchema = require("./user-mongoose-model");
const mentorSchema = require("./mentor-mongoose-model");
const menteeSchema = require("./mentee-mongoose-model");
const postSchema = require("./postModel");
const menteePostSchema = require('./mentee-post-model')

const User = mongoose.model("user", userSchema);
const Post = mongoose.model("post", postSchema);
const Mentor = User.discriminator("mentor", mentorSchema);
const Mentee = User.discriminator("mentee", menteeSchema);
const MenteePost = Post.discriminator('mentee_post', menteePostSchema)

module.exports = {
  User,
  Mentee,
  Mentor,
  Post,
  MenteePost
};
