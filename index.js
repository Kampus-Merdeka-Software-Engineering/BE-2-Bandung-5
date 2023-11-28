const express = require('express');
const dotenv = require('dotenv');
const { sequelize, checkDatabaseConnection } = require('./config/config.js');

dotenv.config();
const app = express();

const port = process.env.PORT || 4000; // Use process.env.PORT if defined, otherwise default to 4000

// Middleware
app.use(express.json());

// Router
app.get('/', (req, res) => {
  res.send('This is API');
});

// Check database connection before starting the server
checkDatabaseConnection()
  .then(() => {
    sequelize.sync();
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });
