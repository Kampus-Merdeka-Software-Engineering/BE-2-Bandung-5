const express = require('express');
const dotenv = require('dotenv');
const { sequelize, checkDatabaseConnection } = require('./config/config.js');

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Router
app.get('/', (req, res) => {
  res.send('hw');
});

// Check database connection before starting the server
checkDatabaseConnection()
  .then(() => {
    sequelize.sync();
    app.listen(port, () => {
      console.log('Server started');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });
