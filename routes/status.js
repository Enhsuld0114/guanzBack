const express = require("express");

const {
  status,
  TsutsahStatus,
  tsutslahDelete,
  Update,
  select,
} = require("../models/status");

const router = express.Router();

router.route("/restaurants/:id").post(status);
router.route("/restaurants/:id/tsutslah").post(TsutsahStatus);
router.route("/restaurants/:resid/delete").post(tsutslahDelete);
router.route("/:useid/restaurants/:res/update").post(Update);
router.route("/restaurants/:useid/select").get(select);
module.exports = router;
