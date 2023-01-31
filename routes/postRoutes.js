const express = require("express");
const PostRoutes = new express.Router();
const auth = require("../middleware/auth");

const {
  addPost,
  addComment,
  getPostByID,
  removeComment,
  removePost,
  getPosts
} = require("../controller/PostController");

PostRoutes.post("/posts/addPost", auth, addPost);
PostRoutes.get("/posts/getPosts", auth, getPosts);
PostRoutes.post("/posts/removePost/:postId", auth, removePost);
PostRoutes.post("/posts/addComment/:postId", auth, addComment);
PostRoutes.post("/posts/removeComment/:postId/:commentId", auth, removeComment);
PostRoutes.get("/posts/:postId", auth, getPostByID);

module.exports = PostRoutes;
