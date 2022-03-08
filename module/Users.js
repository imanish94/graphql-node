
module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define("users",{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        status:DataTypes.BOOLEAN,
        gender:DataTypes.STRING
    },{
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    })
    return Users
}