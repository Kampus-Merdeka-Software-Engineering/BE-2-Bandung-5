const express = require("express");
const router = express.Router();

const assetControllers = require('../controllers/assetControllers')
router.get('/lunggo_asset', assetControllers.getAllAsset)
router.post('/lunggo_asset',assetControllers.insertAsset)
module.exports =  router