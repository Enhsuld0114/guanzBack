const express = require("express");

const { people, zuragll } = require("../models/people");

const router = express.Router();

//"/api/v1/books"

router.route("/home/:resid/:id").get(people);
router.route("/home/zuragl/:id").post(zuragll);
module.exports = router;
