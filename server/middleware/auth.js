const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const {User} = require("../models/user.model");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
    ) {
      token = await req.headers.authorization.split(" ")[1];
      // console.log(token)
    }
    
    if (!token) {
      return next(new ErrorResponse("Not authorized to access this route", 401));
    }
    
    try {
      const decoded = await jwt.verify(token, "hugehugehugehugeuhugeghuge");
      console.log(decoded.id)
      
      const user = await User.findById(decoded.id);
      
      
      if (!user) {
        return next(new ErrorResponse("No user found with this id", 404));
      }
      
      req.user = user;
      
      next();
    } catch (err) {
    return next(new ErrorResponse("Not authorized to access this router", 401));
  }
};