const mongoose = require("mongoose");

const UserSchema =new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("users",UserSchema)
module.exports = Users
