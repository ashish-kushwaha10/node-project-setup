const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common')

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "something went wrong while creating the airplane!!";
        ErrorResponse.error = {explanation:'Model number not found in the incomming request in the correct form'}
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);

    }
    next();
}
module.exports = {
    validateCreateRequest
}