const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
// const { json } = require('body-parser');

const app = express();
// midlleware to read the request bod as json
app.use(express.json());
app.use(express.urlencoded({extended:true})) // middleware for reading url body and extended true to select a qs liabrary which can parse the nested object


// api/v1/airplanes --> POST
app.use('/api', apiRoutes);


app.listen( ServerConfig.PORT, ()=>{
    console.log(`server is listening to PORT : ${ServerConfig.PORT}`)
})


