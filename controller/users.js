const getAllUsers = (req,res) => {
    res.json({
        message: "Get all Users",
    })
}
const createNewUser = (req,res) => {
    console.log(req, body);
    res.json({
        message: "Create new user",
    })
}
module.exports = {
    getAllUsers,
    createNewUser
}