module.exports = (sequelize, DataTypes) => {
    const Lunggo_asset = sequelize.define("lunggo_asset",{
        name_destination :{
            type: DataTypes.STRING,
            allowNull: false
        },
        image :{
            type: DataTypes.STRING,
            allowNull: false
        },
        rating:{
            type: DataTypes.STRING,
            allowNull: false
        },
        information:{
            type: DataTypes.STRING,
            allowNull: false
        },
        importan_info: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return lunggo_asset
}