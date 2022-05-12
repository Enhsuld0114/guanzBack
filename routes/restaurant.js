const express = require("express");

const {
  home,
  Resfoods,
  NonAcitveRes,
  zahialga,
} = require("../models/Restaurans");

const router = express.Router();

//"/api/v1/books"

router.route("/home").get(home);
router.route("/home/:id").get(Resfoods);
router.route("/restaurants").get(NonAcitveRes);
router.route("/zahialga").get(zahialga);

module.exports = router;
