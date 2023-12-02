const dbConfig = require('../config/config.js');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

<<<<<<< HEAD

=======
// sequelize.authenticate()
//     .then(() => {
//         console.log('/connected')
//     }
//     )
//     .catch(err => {
//         console.log('error');
//     })
>>>>>>> 8e46f9cc24f76839c26e8cb2f40ddf0231e5e39a
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.lunggo_asset = require('./assetModels.js')(sequelize, DataTypes)
db.user_booking = require('./userModels.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('re-sync')
    })
module.exports = db