const mongoose = require("mongoose");
const validator = require("validator");
const config = require("../config");
const bcrypt=require("bcrypt");
const jwt= require("jsonwebtoken");




const baseOptions = {
  discriminatorKey: "account_type"
};

const userSchema = new mongoose.Schema({
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
    minlenght: 7,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("Please set another passowrd");
      }
    },
  },

  completed: {
    type: Boolean,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: false,
      },
    },
  ],
},baseOptions);


//SCHEMA METHODS TO BE APPLIED ON INSTANCES OF USER OBJECT
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user.id.toString() }, config.jwt_token);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  };
  

  
   // MOONGOOSE MIDDLEWARE TO HASH THE PASSWORD BEFORE SAVING
  
  userSchema.pre("save", async function (next) {
    const user = this;
  
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });
  
module.exports = userSchema
