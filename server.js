require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const assetRoutes = require("./routes/assetRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(assetRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Listening on port ${PORT}`);
});
