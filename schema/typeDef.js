const graphql = require("graphql")
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} = graphql

const userType = new GraphQLObjectType({
    name:"users",
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        status:{type:GraphQLBoolean},
        gender:{type:GraphQLString}
    })
})

const statusType = new GraphQLObjectType({
    name:"status",
    fields:()=>({
        success:{type:GraphQLBoolean},
        message:{type:GraphQLString},
        error:{type:GraphQLString}
    })
})

module.exports = {
    userType,
    statusType
}