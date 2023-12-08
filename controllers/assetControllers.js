const assetService = require("../service/assetService");

async function insertAsset(req, res) {
  const lunggo_asset = req.body;
  const insertedAsset = await assetService.insertAsset(lunggo_asset);
  res.status(201).json(insertedAsset);
}
async function getAllAsset(req, res) {
  const lunggo_asset = await assetService.getAllAsset();
  res.json(lunggo_asset);
}
async function getOneAsset(req, res) {
  const lunggo_asset = req.params.id;
  const getAssetId = await assetService.getOneAsset(lunggo_asset);
  res.status(201).json(getAssetId);
}

module.exports = {
  getAllAsset,
  insertAsset,
  getOneAsset,
};
