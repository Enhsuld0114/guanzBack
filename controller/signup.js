const User = require("../models/signup");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");
const paginate = require("../utils/paginate");

// register
exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.body,
  });
});
