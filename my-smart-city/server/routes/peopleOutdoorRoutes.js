const express = require("express");
const router = express.Router();
const peopleOutdoorController = require("../controllers/peopleOutdoorController.js");

router.get("/", peopleOutdoorController.getAll);

module.exports = router;

