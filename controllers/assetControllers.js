const assetService = require('../service/assetService')

async function getAllAsset(){
    const lunggo_asset = await assetService.getAllAsset();
    res.json(lunggo_asset)
}

module.exports = {getAllAsset}