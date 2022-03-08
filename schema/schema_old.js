const graphql = require("graphql")
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} = graphql

var db = require("./module");
const User = db.users;

const userType = new GraphQLObjectType({
    name:"users",
    fields:()=>({
        id : {type:GraphQLInt},
        name : {type:GraphQLString},
        email : {type:GraphQLString},
        status : {type:GraphQLBoolean},
        gender : {type:GraphQLString}
    })
})

const rootQuery = new GraphQLObjectType({
    name:"node",
    fields:{
        graphqllearn:{
            type: new GraphQLList(userType),
            resolve(parent,arg){
               let data = User.findAll()
            return data;
            }
        }
    }
})

module.exports = new GraphQLSchema({
     query : rootQuery
})