const express = require("express");
const ConnectionRoutes = new express.Router();
const auth = require("../middleware/auth");

const {
  requestForMentorship,
  approveMentorship,
  declineRequestForMentorship,
  cancelRequestForMentorship,
  cancelMentorship,
} = require("../controller/ConnectionContoller");

ConnectionRoutes.post(
  "/connection/requestMentorship/:mentorId",
  auth,
  requestForMentorship
);
ConnectionRoutes.post(
  "/connection/approveMentorship/:menteeId",
  auth,
  approveMentorship
);
ConnectionRoutes.post(
  "/connection/declineRequestForMentorship/:menteeId",
  auth,
  declineRequestForMentorship
);
ConnectionRoutes.post(
  "/connection/cancelRequestForMentorship/:mentorId",
  auth,
  cancelRequestForMentorship
);
ConnectionRoutes.post(
  "/connection/cancelMentorship/:menteeId",
  auth,
  cancelMentorship
);

module.exports = ConnectionRoutes;
