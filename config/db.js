const Sequelize = require("sequelize");
require('dotenv').config()

const {DATABASE,USER,PASSWORD,HOST} = process.env

const sequelize = new Sequelize(DATABASE,USER,PASSWORD,{
host : HOST,
dialect : "mysql",
logging : true
})

sequelize.authenticate()
.then(()=>{
    console.log("connected")
})
.catch(e=>{
    console.log("error",e)
})

module.exports = sequelize;