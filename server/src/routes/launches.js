const express = require("express");

const router = express.Router();

const {
  httpGetAllLaunches,
  httpAddNewLaunch,
} = require("../controllers/launches");

router.post("/", httpAddNewLaunch);

router.get("/", httpGetAllLaunches);

module.exports = router;
