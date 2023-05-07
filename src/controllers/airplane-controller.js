const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const { ErrorResponse, SuccessResponse } = require('../utils/common')
/*
POST call
data will be in object format -> {modelNumber:"a323", capacity:180 }
*/

async function creatAirplane(req, res) {

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        }
        )
        SuccessResponse.data = airplane;
        SuccessResponse.message = "airplane successfully created";
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error
        res
            .status(error.statusCode)
            .json(ErrorResponse)

    }

}



module.exports = {
    creatAirplane
}