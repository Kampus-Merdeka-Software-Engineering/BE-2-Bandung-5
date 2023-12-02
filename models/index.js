const dbConfig = require('../config/config.js');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

// sequelize.authenticate()
//     .then(() => {
//         console.log('/connected')
//     }
//     )
//     .catch(err => {
//         console.log('error');
//     })
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