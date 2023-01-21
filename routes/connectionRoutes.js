const express = require("express");
const ConnectionRoutes = new express.Router();
const auth = require("../middleware/auth");


const {
  requestForMentorship,
  approveMentorship,
  declineRequestForMentorship,
  cancelRequestForMentorship,
  cancelMentorship
} = require("../controller/ConnectionContoller");


ConnectionRoutes.post("/connection/requestMentorship/:mentorId", auth, requestForMentorship);
ConnectionRoutes.post("/connection/approveMentorship", auth, approveMentorship);
ConnectionRoutes.post("/connection/declineRequestForMentorship", auth, declineRequestForMentorship);
ConnectionRoutes.post("/connection/cancelRequestForMentorship", auth, cancelRequestForMentorship);
ConnectionRoutes.post("/connection/cancelMentorship", auth, cancelMentorship);


module.exports = ConnectionRoutes;
