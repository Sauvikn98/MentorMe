const mongoose = require("mongoose");
const validator = require("validator");

const baseOptions = {
  discriminatorKey: "account_type",
};

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is not valid");
        }
      },
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    profileCompleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    profileImage: {
      type: String,
    },
    education: [
      {
        collegeName: String,
        startDate: Date,
        endDate: Date,
        current: Boolean,
        description: String,
      },
    ],
    posts: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "post",
        },
        title: {
          type: String,
        },
      },
    ],
    comments: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "post",
        },
        title: {
          type: String,
        },
      },
    ],
  },
  baseOptions
);

module.exports = userSchema;
