const graphql = require("graphql")
const {
    GraphQLObjectType,
    GraphQLSchema
} = graphql
const {UserList,UserFindById} = require("./../schema/queries")
const { UserAdd,UserEdit,UserRemove } = require("./mutation")

const rootQuery = new GraphQLObjectType({
    name:"node",
    fields:{
        listAllUser:UserList,
        listById:UserFindById
    }
})

const Mutation = new GraphQLObjectType({
    name:"mutation",
    fields:{
        createUser:UserAdd,
        updateUser:UserEdit,
        deleteUser:UserRemove
    }
})

module.exports = new GraphQLSchema({
     query : rootQuery,
     mutation : Mutation
})