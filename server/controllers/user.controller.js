const { User } = require('../models/user.model');

/////////////////////////////////////////////////////////////
// log in and registration ::

const ErrorResponse = require("../utils/errorResponse");
const {jwt} = require("jsonwebtoken");
const { error } = require("console");
const {jwtdecode}  = require("jwt-decode");
// const sendEmail = require("../utils/sendEmail");

// Login user :

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 401));
  }

  try {
    // Check that user exists by email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Register user:

// module.exports.register = async (req, res, next) => {
module.exports.register = async (req, res) => { 
  const { userName, email, password } = req.body;
  console.log("jijijijiji");
  console.log(userName, email, password);
  try {
    const user = await User.create({
      userName,
      email,
      password
    });
    console.log(user);
    sendToken(user, 201, res);
  } 
  catch (error) {
    res.status(500).json({err:error})
    // next(err);
  };
}

const sendToken = async(user, statusCode, res) => {
  const token = await user.getSignedJwtToken();
  var decoded = jwtdecode(token);
  console.log(decoded);
  res.status(statusCode).json({ sucess: true, token, user });
};

module.exports.getToken = async(user) => {
  const token = await user.getSignedJwtToken();
  var decoded = jwtdecode(token);
  console.log(decoded);
  return decoded;
};


