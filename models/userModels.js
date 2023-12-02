module.exports = (sequelize, DataTypes) => {
    const user_booking = sequelize.define("user_booking",{
        name :{
            type: DataTypes.STRING
        },
        email :{
            type: DataTypes.STRING
        },
        phone:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        address_office: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.STRING
        },
        people: {
            type: DataTypes.STRING
        },
        price_total:{
            type: DataTypes.STRING
        }

    })
    return user_booking
}