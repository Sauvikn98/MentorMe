const mongoose = require("mongoose");

const baseOptions = {
  discriminatorKey: "post_type",
};

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      authorName: String,
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
          required: true,
        },
        postedOn: Date,
      },
    ],
  },
  { timestamps: true },
  baseOptions
);

module.exports = postSchema;
