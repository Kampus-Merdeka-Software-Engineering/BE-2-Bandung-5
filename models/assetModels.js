module.exports = (sequelize, DataTypes) => {
    const Lunggo_asset = sequelize.define("lunggo_asset", {
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
        important_info: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Lunggo_asset // Make sure to use the same capitalization here
};
