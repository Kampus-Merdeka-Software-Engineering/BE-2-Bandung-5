const db = require('../models')

//create main model

const User_booking = db.user_booking

const getUser = async (req, res) => {
    let user_booking = await User_booking.findAll({
        attributes: ['name', 'email', 'phone', 'address', 'address_office', 'date', 'people', 'price_total']
    })
    res.send(200).send(user_booking)
}

const postUser = async (req, res) => {
    const { name, email, phone, address, address_office, date, people, price_total } = req.body;
    try {
        await User_booking.create({
            name,
            email, phone, address, address_office, date, people, price_total
        });
        res.send(200).json({
            success: true
        })
    } catch (error) {
        res.send(500).json({
            success: false
        })
    }
}
module.exports = {
    getUser, postUser
}