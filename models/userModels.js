module.exports = (sequelize, DataTypes) => {
    const User_booking = sequelize.define('user_booking',{
        name :{
            type: DataTypes.STRING,
            allowNull: false
        },
        email :{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address_office: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        people: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price_total:{
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return User_booking
}