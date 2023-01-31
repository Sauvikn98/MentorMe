const { User, Mentee, Mentor } = require("../modals/mongoose-model");
const cloudinary = require("cloudinary").v2;
const { deleteFile } = require("../cloudinary/cloudinary");

exports.addProfileImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: { profileImage: result.secure_url } },
      { new: true }
    ).select("-password -updatedAt -createdAt");
    if (result.secure_url) {
      deleteFile(req.file.filename);
    }
    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.addEducation = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      {
        _id: req.user.id,
      },
      {
        $push: {
          education: {
            collegeName: req.body.collegeName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            current: req.body.current,
            description: req.body.description,
          },
        },
      },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Server Error" });
  }
};
exports.addExperience = async (req, res) => {
  try {
    const user = await Mentor.findOneAndUpdate(
      {
        _id: req.user.id,
      },
      {
        $push: {
          experience: {
            companyName: req.body.companyName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            current: req.body.current,
            description: req.body.description,
          },
        },
      },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
exports.deleteEducation = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $pull: { education: { _id: req.params.id } } },
      { new: true }
    );
    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
exports.deleteExperience = async (req, res) => {
  try {
    const user = await Mentor.findOneAndUpdate(
      { _id: req.user.id },
      { $pull: { experience: { _id: req.params.id } } },
      {new: true}
    );
    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
