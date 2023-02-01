const { User, Mentee, Mentor } = require("../modals/mongoose-model");

// to be done by students/mentees
// send a connection request to mentor
// the student ID would be saved to mentor's "pendingMentees" array
// the mentor ID would be saved to mentee's "pendingMentors" array
exports.requestForMentorship = async (req, res) => {
  console.log(req.user);
  if (req.user.account_type != "mentee") {
    return res
      .status(422)
      .json({ error: "Only Mentee can request for mentorship" });
  }
  try {
    Mentor.findByIdAndUpdate(
      { _id: req.params.mentorId },
      { $push: { pendingMentees: { id: req.user.id } } },
      { new: true, upsert: true },
      (err, result) => {
        if (err) return res.status(422).json({ msg: "Something went wrong!" });
        Mentee.findByIdAndUpdate(
          { _id: req.user.id },
          { $push: { pendingMentors: { id: req.params.mentorId } } },
          { new: true, upsert: true },
          (err, result) => {
            if (err)
              return res.status(422).json({ msg: "Something went wrong!" });
            return res.status(200).json({ msg: "Request added successfully!" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// to be done by mentors
// accepts a connection request from a mentee by a mentor
// the student ID would be saved to mentor's "approvedMentees" array
// the mentor ID would be saved to mentee's "approvedMentors" array
// the above two actions would be done after removing IDs from pending list
exports.approveMentorship = async (req, res) => {
  console.log('approving...', req.params.menteeId)
  if (req.user.account_type != "mentor") {
    return res
      .status(422)
      .json({ error: "Only Mentor can approve mentorship request!" });
  }
  try {
    Mentor.findByIdAndUpdate(
      { _id: req.user.id },
      // PULL FROM PENDING LIST AND PUSH IT TO APPROVE LIST
      {
        $pull: { pendingMentees: { id: req.params.menteeId } },
        $push: { approvedMentees: { id: req.params.menteeId } },
      },
      { new: true },
      (err, result) => {
        if (err) return res.status(422).json({ msg: "Something went wrong!" });
        Mentee.findByIdAndUpdate(
          { _id: req.params.menteeId },
          {
            $pull: { pendingMentors: { id: req.user.id } },
            $push: { approvedMentors: { id: req.user.id } },
          },
          { new: true },
          (err, result) => {
            if (err)
              return res.status(422).json({ msg: "Something went wrong!" });
            return res
              .status(200)
              .json({ msg: "Request approved successfully!" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// to be done by mentors
// deletes/decline a connection request from a mentee by a mentor
// the student ID would be deleted from mentor's "pendingMentees" array
// the mentor ID would be deleted from mentee's "pendingMentors" array
exports.declineRequestForMentorship = async (req, res) => {
  if (req.user.account_type != "mentor") {
    return res
      .status(422)
      .json({ error: "Only Mentor can decline mentorship request" });
  }
  try {
    Mentor.findByIdAndUpdate(
      { _id: req.user.id },
      { $pull: { pendingMentees: { id: req.params.menteeId } } },
      { new: true },
      (err, result) => {
        if (err) return res.status(422).json({ msg: "Something went wrong!" });
        Mentee.findByIdAndUpdate(
          { _id: req.params.menteeId },
          { $pull: { pendingMentors: { id: req.user.id } } },
          { new: true },
          (err, result) => {
            if (err)
              return res.status(422).json({ msg: "Something went wrong!" });
            return res
              .status(200)
              .json({ msg: "Request declined successfully!" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// to be done by mentees
// deletes/cancels a connection request for a mentor by a mentee
// the student ID would be deleted from mentor's "pendingMentees" array
// the mentor ID would be deleted from mentee's "pendingMentors" array
exports.cancelRequestForMentorship = async (req, res) => {
  if (req.user.account_type != "mentee") {
    return res
      .status(422)
      .json({ error: "Only Mentee can cancel mentorship request" });
  }
  try {
    Mentor.findByIdAndUpdate(
      { _id: req.params.mentorId },
      { $pull: { pendingMentees: { id: req.user.id } } },
      { new: true, upsert: true },
      (err, result) => {
        if (err) return res.status(422).json({ msg: "Something went wrong!" });
        Mentee.findByIdAndUpdate(
          { _id: req.user.id },
          { $pull: { pendingMentors: { id: req.params.mentorId } } },
          { new: true, upsert: true },
          (err, result) => {
            if (err)
              return res.status(422).json({ msg: "Something went wrong!" });
            return res
              .status(200)
              .json({ msg: "Request cancelled successfully!" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

// to be done by mentors
// deletes/cancels a connection by a mentor
// the student ID would be deleted from mentor's "approvedMentees" array
// the mentor ID would be deleted from mentee's "approvedMentors" array
exports.cancelMentorship = async (req, res) => {
  if (req.user.account_type != "mentor") {
    return res.status(422).json({ error: "Only Mentor can cancel mentorship" });
  }
  try {
    Mentor.findByIdAndUpdate(
      { _id: req.user.id },
      { $pull: { approvedMentees: { id: req.params.menteeId } } },
      { new: true },
      (err, result) => {
        if (err) return res.status(422).json({ msg: "Something went wrong!" });
        Mentee.findByIdAndUpdate(
          { _id: req.params.menteeId },
          { $pull: { approvedMentors: { id: req.user.id } } },
          { new: true },
          (err, result) => {
            if (err)
              return res.status(422).json({ msg: "Something went wrong!" });
            return res
              .status(200)
              .json({ msg: "Mentee removed successfully!" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};
