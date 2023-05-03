const express = require('express');
const { airplaneController} = require('../../controllers')

const router = express.Router();

// api/v1/airplanes -->POST
router.post("/", airplaneController.creatAirplane)

module.exports = router;