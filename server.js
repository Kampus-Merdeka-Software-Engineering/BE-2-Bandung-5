const express = require("express");
const dotenv = require("dotenv");
const { sequelize, checkDatabaseConnection } = require("./config/config.js");
const cors = require('cors');
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
// Middleware
app.use(express.json());

// Router
// app.get("/", (req, res) => {
//   res.send("This is API");
// });

const router_asset = require('./routes/assetRoutes.js');
app.use('/api/asset', router_asset);

const router_user = require('./routes/userBookRoutes');
app.use('/api/user', router_user);

// Check database connection before starting the server
checkDatabaseConnection()
  .then(() => {
    sequelize.sync();
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
