const { User, Mentee, Mentor } = require("../modals/mongoose-model");
const cloudinary = require('cloudinary').v2;
const { deleteFile } = require('../cloudinary/cloudinary');

exports.addProfileImage = async (req, res)=> {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const user = await User.findOneAndUpdate(
          { _id: req.user.id },
          { $set: { profileImage: result.secure_url } },
          { new: true }
        ).select('-password -updatedAt -createdAt');
        if (result.secure_url) {
          deleteFile(req.file.filename);
        }
        return res.json(user);
      } catch (error) {
        res.status(500).json({ error:'Server Error' });
      }
}

exports.addEducation = async (req, res)=> {

}

exports.addExperience = async (req, res)=> {

}
exports.deleteEducation = async (req, res)=> {

}
exports.deleteExperience = async (req, res)=> {

}