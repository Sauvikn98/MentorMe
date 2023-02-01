const { User, Mentee, Mentor } = require("../modals/mongoose-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createMentor = async (req, res) => {
  const { email, password, name } = req.body;
  console.log(req.body)
  console.log(email, password, name)
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    user = new Mentor({
      name,
      email,
      password,
      account_type: "mentor",
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.account_type,
        name: user.name,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_TOKEN,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.createMentee = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    user = new Mentee({
      name,
      email,
      password,
      account_type: "mentee",
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.account_type,
        name: user.name,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_TOKEN,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User doesnot exist!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect credential" });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.account_type,
        name: user.name,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_TOKEN,
      { expiresIn: "7 days" },
      (err, token) => {
        if (err) throw err;
        return res.json({ token, user });
      }
    );
  } catch (error) {
    return res.status(400).send({ error: "Some error occured" });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).select(
      "-password -updatedAt -createdAt"
    );
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  console.log({id})
  try {
    const user = await User.findById({ _id: id }).select(
      "-password -updatedAt -createdAt"
    );
    res.json(user);
  } catch (err) {
    console.log({err})
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getUserByName = async (req, res) => {
  const { name } = req.params;
  User.find({ name }).then((users) => res.status(200).send(users));
};

exports.getAllMentors = async (req, res)=> {
  try {
    console.log("getting")
    const users = await User.find({ account_type: "mentor" }).select(
      "-password -updatedAt -createdAt"
    );
    res.json(users);
  } catch (err) {
    console.log({err})
    res.status(500).json({ error: "Server Error" });
  }
} 