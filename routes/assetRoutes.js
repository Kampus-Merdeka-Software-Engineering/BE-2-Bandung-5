const express = require("express");
const router = express.Router();

const assetControllers = require('../controllers/assetControllers')
router.get('/lunggo_asset', assetControllers.getAllAsset)

module.exports =  router