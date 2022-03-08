const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql")
const cors = require("cors");
const schema = require("./schema")
var db = require("./module");
require('dotenv').config()

var root = {
    dbConfig : db
}

const corsOptions ={
   origin:'*', 
   credentials:true,  //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(express.json())

app.use(cors(corsOptions)) // Use this after the variable declaration

const context = async (req) => {
     const host = req.headers.host;
     return host;
}

app.use('/graphql',
    // graphqlHTTP({
    //     schema,
    //     graphiql : true,
    //     rootValue:root,
    //     context:()=>context(req)
    // })

    graphqlHTTP(async req => ({
        schema,
        graphiql : true,
        rootValue : root,
        context:()=>context(req)
    }))
)

app.listen(process.env.PORT,()=>{
    console.log(`App listen on port : ${process.env.PORT}`)
})