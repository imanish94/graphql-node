const {userType} = require("./../schema/typeDef")
const {GraphQLList,GraphQLInt} = require("graphql")

const UserList = {
    type: new GraphQLList(userType),
    // resolve(parent,args,context){
    //    const head =  context();
    //     const {dbConfig} = parent;
    //  let data = dbConfig.users.findAll()
    //    //let data = User.findAll({where : {id : 4}})
    // return data;
    // }

    resolve: async(parent,args,context)=>{
        const head = await context();
        const {dbConfig} = parent;
        let data = dbConfig.users.findAll();
        return data
    }
}

const UserFindById = {
    type : new GraphQLList(userType),
    args:{
        id:{type:GraphQLInt}
    },
    resolve(parent,args){
        const {dbConfig} = parent;
        let data = dbConfig.users.findAll({where : { id : args.id }})
        return data;
    }
}


module.exports = {
    UserList,
    UserFindById
}