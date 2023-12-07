const assetService = require("../service/assetService");

async function insertAsset(req, res) {
  try {
    const lunggo_asset = req.body;
    const insertedAsset = await assetService.insertAsset(lunggo_asset);
    res.status(201).json(insertedAsset);
  } catch (err) {
    res.json(err);
  }
}
async function getAllAsset(req, res) {
  const lunggo_asset = await assetService.getAllAsset();
  res.json(lunggo_asset);
}
async function getOneAsset(req, res) {
    const lunggo_asset = await assetService.getOneAsset();
    res.json(lunggo_asset)
}
module.exports = {
  getAllAsset,
  insertAsset,
  getOneAsset
};
