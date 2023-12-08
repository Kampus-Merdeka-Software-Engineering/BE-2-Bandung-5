const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userControllers");

router.get("/user_booking", userControllers.getAllUser);
router.post("/user_booking", userControllers.createUser);

module.exports = router;
