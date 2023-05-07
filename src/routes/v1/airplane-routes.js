const express = require('express');
const { airplaneController} = require('../../controllers')
const { AirplaneMiddleWares} = require('../../middlewares')


const router = express.Router();

// api/v1/airplanes -->POST
router.post("/",
 AirplaneMiddleWares.validateCreateRequest, 
 airplaneController.creatAirplane
 )

module.exports = router;