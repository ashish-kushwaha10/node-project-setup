const crudRepository = require('./crud-repository');
const {Airplane} = require('../models') ;

class airplainRepository extends crudRepository{

    constructor(){
        super(Airplane)
    }
}
module.exports = airplainRepository;