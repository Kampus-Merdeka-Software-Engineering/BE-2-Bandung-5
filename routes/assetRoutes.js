const express = require('express');
const assetController = require('../controllers/assetController')
const router = require('express').Router()

router.post('/add_lunggo_asset', assetController.add_lunggo_asset)
router.get('/getAllAsset', assetController.getAllAsset, assetController.getSingleAsset)

module.exports = router;