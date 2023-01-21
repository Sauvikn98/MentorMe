const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true
  },
  author: {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    authorName: String,
  },
  // If the type of post is job-posting, 
  // then this field will be useful 
  // for seperating job posts from normal posts.
  jobPost: {
    type: Boolean,
    default: false,
    required: true,
  },
  
  comments: [
    {
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      authorName: String,
      text: {
        type: String,
        required: true
      },
      postedOn: Date
    },
  ],
}, {timestamps: true});

module.exports = postSchema;
