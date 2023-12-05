const userService = require('../service/userService')

async function createUser(req, res){
    const user_booking = req.body;
    const createdUser = await userService.createUser(user_booking);
    res.status(201).json(createdUser)
}
async function getAllUser(req, res){
    const user_booking = await userService.getAllUser();
    res.json(user_booking)
}


module.exports = {
    createUser, getAllUser
}
