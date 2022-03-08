//create, update add deleted

const {statusType} = require("./../schema/typeDef")
const { GraphQLString,GraphQLBoolean,GraphQLInt} = require("graphql")

const arguments = {
    id:{type:GraphQLInt},
    name:{type:GraphQLString},
    email:{type:GraphQLString},
    status:{type:GraphQLBoolean},
    gender:{type:GraphQLString}
}

const UserAdd = {
    type: statusType,
    args: arguments,
    resolve(parent,args){
        const {dbConfig} = parent;
        dbConfig.users.create({
            name:args.name,
            email:args.email,
            status:args.status,
            gender:args.gender
        })
    return {
         success : true, message:"User Created Successfully..",error:""
        }
    }
}

const UserEdit = {
    type: statusType,
    args: arguments,
    resolve: async (parent,args)=>{
        const {dbConfig} = parent;
        dbConfig.users.update({
            name:args.name,
            email:args.email,
            status:args.status,
            gender:args.gender
        },{
         where:{
             id : args.id
         }  
        })
        return {
            success : true, message:"User Update Successfully..",error:""
        }
    }
}

const UserRemove = {
    type: statusType,
    args: arguments,
    resolve: async (parent,args)=>{
        const {dbConfig} = parent;
        dbConfig.users.destroy({
         where:{
             id : args.id
         }  
        })
        return {
            success : true, message:"User Deleted Successfully..",error:""
        }
    }
}

module.exports = {
    UserAdd,
    UserEdit,
    UserRemove
}