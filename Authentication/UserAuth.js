const Users = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userReg = async (req, res) => {
  try {
    const { id, name, email, password, role } = req.body;
    const existing =await Users.findOne({ email });
    if (existing) {
      res.status(404).json("User already exists");
    } else {
      const hashedPassword =await bcrypt.hash(password, 10);
      const newUser = new Users({
        id: id,
        name: name,
        email: email,
        password: hashedPassword,
        role: role,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

exports.UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existing = await Users.findOne({ email });
    const check =await bcrypt.compare(password, existing.password);
    if (!check) {
      res.status(404).json("wrong Password");
    } else {
      const token = jwt.sign(existing.id, process.env.SECRETKEY);
      res.status(200).json({ token, Username: existing.name });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};

exports.allusers = async (req, res) => {
  try {
    const UsersList =await Users.find();
    res.status(200).json({ UsersList });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};
