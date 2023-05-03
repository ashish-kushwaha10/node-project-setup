const express = require('express');

const router = express.Router();
const {infoController} = require('../../controllers');
const airPlaneRoutes = require('./airplane-routes')

router.get("/info", infoController.info)

router.use("/airplanes", airPlaneRoutes)

module.exports = router;