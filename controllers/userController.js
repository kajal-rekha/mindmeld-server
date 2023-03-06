const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

// register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await userModel.findOne({ email });

  if (exist) {
    return res.status(400).json("Email already exist");
  }

  // validation
  if (!name || !email || !password) {
    return res.status(400).json("All fields are required");
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json("Invalied email");
  }

  if (!validator.isStrongPassword(password)) {
    return res
      .status(400)
      .json(
        "Password does not meet complexity requirements. Please choose a stronger password."
      );
  }

  // hash password

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
};

module.exports = {
  registerUser,
};
