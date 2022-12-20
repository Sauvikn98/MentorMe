const express = require("express");
const UserRoutes = new express.Router();
const auth = require("../middleware/auth");


const {
  createMentor,
  createMentee,
  userLogin,
  userLogout,
  userDelete,
  getCurrentUser,
  getUserByName,
} = require("../controller/UserController");



UserRoutes.get("/users/me", auth, getCurrentUser);

UserRoutes.get("/users/search/:name", getUserByName);

UserRoutes.post("/user/register/mentor", createMentor);

UserRoutes.post("/user/register/mentee", createMentee);

UserRoutes.post("/user/login", userLogin);
UserRoutes.post("/user/logout",auth, userLogout);
UserRoutes.delete("/user/delete/:id", userDelete);

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
