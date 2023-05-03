const {AirplaneService} = require('../services');
const { StatusCodes} = require('http-status-codes');

/*
POST call
data will be in object format -> {modelNumber:"a323", capacity:180 }

*/

async function creatAirplane(req, res) {

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
             capacity:req.body.capacity 
            }
        )

      return res
                .status(StatusCodes.CREATED)
                .json({
                    success:true,
                    message:"airplane successfully created",
                    data: airplane,
                    error:{}
                })

    } catch (error) {
        res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success:true,
                    message:"something went wrong",
                    data: {},
                    error:error
                })

    }
    
}

module.exports = {
    creatAirplane
}