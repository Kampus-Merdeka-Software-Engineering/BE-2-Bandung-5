const sequelize = require('./config/sequelize');
const express = require('express');

const userRoutes = require('./routes/users.js');
const app = express();
const middlewareLogRequest = require('./middleware/log.js');

app.use(middlewareLogRequest);
app.use('/users', userRoutes);

app.listen(4000, () => {
    console.log('Server running on 4000');
})