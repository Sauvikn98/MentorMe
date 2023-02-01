const express = require("express");
const UserRoutes = new express.Router();
const auth = require("../middleware/auth");
const { upload } = require("../cloudinary/cloudinary");

const {
  getCurrentUser,
  getUserById,
  getUserByName,
  createMentee,
  createMentor,
  loginUser,
  getAllMentors,
} = require("../controller/UserController");

const {
  addProfileImage,
  addEducation,
  addExperience,
  deleteEducation,
  deleteExperience,
} = require("../controller/UserProfileController");

UserRoutes.post("/user/register/mentor", createMentor);

UserRoutes.post("/user/register/mentee", createMentee);

UserRoutes.post("/user/login", loginUser);

UserRoutes.get("/user/current", auth, getCurrentUser);

UserRoutes.get("/user/mentors/get", auth, getAllMentors);

UserRoutes.get("/user/search/:name", auth, getUserByName);

UserRoutes.get("/user/:id", auth, getUserById);


// routes for user profile---

UserRoutes.post(
  "/user/profile/addProfileImage",
  auth,
  upload.single("profileImage"),
  addProfileImage
);


UserRoutes.post("/user/profile/addEducation", auth, addEducation);

UserRoutes.post("/user/profile/addExperience", auth, addExperience);

UserRoutes.post("/user/profile/deleteEducation/:id", auth, deleteEducation);

UserRoutes.post("/user/profile/deleteExperience/:id", auth, deleteExperience);

// UserRoutes.patch("/user/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdate = ["name", "email", "password",];
//   const isValidOperation = updates.every((updates) =>
//     allowedUpdate.includes(updates)
//   );

//   if (!isValidOperation) {
//     return res.status(400).send({ error: "Invalid updates" });
//   }
//   try {
//     const User = await user.findById(req.body.params);
//     updates.forEach((update) => (user[update] = req.body[update]));
//     await User.save();
//     //  const user= await User.findByIdAndUpdate(req.params.id,req.body,{new: true, useValidators: true});
//     if (!User) {
//       return res.status(404).send();
//     }
//     res.status(202).send(User);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

module.exports = UserRoutes;
