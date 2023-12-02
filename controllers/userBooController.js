const db = require('../models')

//create main model
const Lunggo_asset = db.lunggo_asset
const User_booking = db.user_booking

const getUser = async (req, res) => {
    let user_booking = await User_booking.findAll({
        attributes: ['name', 'email', 'phone', 'address', 'addres_office', 'date', 'people', 'price_total'],
        where: {}
    })
    res.send(200).send(user_booking)
}

const postUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        await User_booking.create({
            name,
            email
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