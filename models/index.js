const dbConfig = require('../config/config.js');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize (
    dbConfig.DB_NAME,
    dbConfig.DB_USER,
    dbConfig.DB_PASSWORD, {
        host: DB_HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false 
    }

)
sequelize.authenticate()
.then(()=>{
    console.log('/connected')
}
)
.catch(err => {
    console.log('error');
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.lunggo_asset = require('./assetModels.js')(sequelize, DataTypes)
db.user_booking = require('./userModels.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})