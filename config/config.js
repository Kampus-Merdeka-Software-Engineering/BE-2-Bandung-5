const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
});

const checkDatabaseConnection = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Database Terhubung');
        resolve();
      })
      .catch((err) => {
        console.error('Database Tidak Terhubung:', err);
        reject(err);
      });
  });
};

module.exports = { sequelize, checkDatabaseConnection };
