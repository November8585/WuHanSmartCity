const express = require("express");
const router = express.Router();
const populationController = require("../controllers/populationDistributionController");

router.get("/", populationController.getAll);

module.exports = router;

