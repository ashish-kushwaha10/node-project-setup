const {AirplaneRepository}= require('../repositories');

const airplaneRepository = new AirplaneRepository()

async function createAirplane(data){

    try {
        const airplane = await airplaneRepository.create(data);
        console.log("success response from airplane - service ", airplane)
        return airplane;
    }
    catch(err){
        throw err;
    }
}

module.exports = {createAirplane}