const express = require("express");
const router = express.Router();
const busOnlineController = require("../controllers/busOnlineController.js");

router.get("/", busOnlineController.getAll);

module.exports = router;