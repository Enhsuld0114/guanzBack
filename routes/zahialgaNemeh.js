const express = require("express");

const { zahialgaNemeh, zahialgaHasah } = require("../models/zahialgaNemeh");
const { route } = require("./restaurant");

const router = express.Router();

router.route("/:id/home/:resid/:foodid").post(zahialgaNemeh);
router.route("/:id/home/:resid/:foodid/hasah").post(zahialgaHasah);
module.exports = router;
