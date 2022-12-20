const { User , mentee, mentor } = require("../modals/mongoose-model");
const bcrypt= require('bcrypt');


exports.createMentor = async (req, res) => {
  const user = new mentor(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (err) {
    return res.status(404).send({error: "Error during mentor creation"});
  }
};
exports.createMentee = async (req, res) => {
  const user = new mentee(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (err) {
    return res.status(404).send({error: "Error during mentee creation"});
  }
};
exports.userLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(401).send({error: "No user with such email ID exist"});
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(401).send({error: "The password provides is wrong"});
    }
    const token = await user.generateAuthToken();

    res.send({ token, user });
  } catch (error) {
    return res.status(400).send({error: "Some error occured"});
  }
};

exports.userLogout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((tokens) => {
      return tokens.token != req.token;
    });
    await req.user.save();
    return res.status(200).send({success: "User logged out successfully"});
  } catch (e) {
    return res.status(400).send({error: "Some error occured during the operation "});
  }
};

exports.userDelete = async (req, res) => {
  try {
    const User = await User.findByIdAndDelete(req.params.id);
    if (!User) {
      return res.status(404).send({error: "No user found with such Id"});
    }
    res.send(User);
  } catch (err) {
    return res
      .status(500)
      .send({error: "Some error occured during delete user operation"});
  }
};

exports.getCurrentUser = async (req, res) => {
  res.send(req.user);
};

exports.getUserByName = async (req, res) => {
  const name = req.params.name;
  User.find({ name })
    .select("name email ")
    .then(function (users) {
      res.send(users);
    });
};
