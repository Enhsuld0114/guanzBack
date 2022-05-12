const express = require("express");

const { postsignup } = require("../models/signup");
const { postuser } = require("../models/user");
const router = express.Router();

//"/api/v1/books"
router.route("/").post(postuser);
router.route("/signup").post(postsignup);
module.exports = router;

// const express = require("express");

// const { postsignup } = require("../models/signup");
// const { login } = require("../controller/login");
// const router = express.Router();

// router.route("/").post(login);
// router.route("/signup").post(postsignup);
// module.exports = router;
