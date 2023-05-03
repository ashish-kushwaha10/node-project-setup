const { Logger} = require('../config')

class crudRepository{
    
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            const response = await this.model.create(data)
            return response;
        } catch (error) {
            Logger.error("something went wrong in crud repository :creat")
            throw error;
        }
    }

    async destroy(){
        try {
            const response = await this.model.destroy({
                where:{
                    id :data
                }
            })
            return response;
        } catch (error) {
            Logger.error("something went wrong in crud repository :creat")
            throw error;
        }
    }

    async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response;
        } catch (error) {
            Logger.error("something went wrong in crud repository :get")
            throw error;
        }
    }

    async getAll(){ // return the array of values
        try {
            const response = await this.model.findAll()
            return response;
        } catch (error) {
            Logger.error("something went wrong in crud repository :getAll")
            throw error;
        }
    }

    async update(id, data){ // data should be in object form
        try {
            const response = await this.model.update(data, {
                where :{
                    id:id
                }
            })
            return response;
        } catch (error) {
            Logger.error("something went wrong in crud repository :update")
            throw error;
        }
    }

}

module.exports = crudRepository;