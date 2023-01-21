const { User, Mentee, Mentor } = require("../modals/mongoose-model");

// to be done by students/mentees 
// send a connection request to mentor
// the student ID would be saved to mentor's "pendingMentees" array
// the mentor ID would be saved to mentee's "pendingMentors" array
exports.requestForMentorship = async (req, res)=> {
    console.log(req.params)
    console.log(req.user)
    try {
        Mentor.findByIdAndUpdate(
            {_id: req.params.mentorId},
            {$push:{pendingMentees:{id: req.user.id}}},
            {new: true, upsert: true},
            (err, result)=> {
                if(err) return res.status(422).json({msg:'Something went wrong!'})
                Mentee.findByIdAndUpdate(
                    {_id: req.user.id},
                    {$push:{pendingMentors:{id: req.params.mentorId}}},
                    {new: true, upsert: true},
                    (err, result)=> {
                        if(err) return res.status(422).json({msg:'Something went wrong!'})
                        return res.status(200).json({msg:"Request added successfully!"})
                    }
                )
            }
            )
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
}

// to be done by mentors
// accepts a connection request from a mentee by a mentor
// the student ID would be saved to mentor's "approvedMentees" array
// the mentor ID would be saved to mentee's "approvedMentors" array
exports.approveMentorship = async (req, res)=> {

}

// to be done by mentors
// deletes/decline a connection request from a mentee by a mentor
// the student ID would be deleted from mentor's "pendingMentees" array
// the mentor ID would be deleted from mentee's "pendingMentors" array
exports.declineRequestForMentorship = async (req, res)=> {

}

// to be done by mentees
// deletes/cancels a connection request for a mentor by a mentee
// the student ID would be deleted from mentor's "pendingMentees" array
// the mentor ID would be deleted from mentee's "pendingMentors" array
exports.cancelRequestForMentorship = async (req, res)=> {

}

// to be done by mentors
// deletes/cancels a connection by a mentor
// the student ID would be deleted from mentor's "approvedMentees" array
// the mentor ID would be deleted from mentee's "approvedMentors" array
exports.cancelMentorship = async (req, res)=> {

}