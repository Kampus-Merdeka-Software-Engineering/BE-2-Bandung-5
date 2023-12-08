const prisma = require("../config/prisma");

async function getAllAsset() {
  try {
    const lunggo_asset = await prisma.lunggo_asset.findMany();
    return lunggo_asset;
  } catch (err) {
    return err;
  }
}
async function insertAsset(lunggo_asset) {
  try {
    await prisma.lunggo_asset.create({
      data: lunggo_asset,
    });
  } catch (err) {
    throw err;
  }
}
async function getOneAsset(id) {
  try {
    const oneAsset = await prisma.lunggo_asset.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return oneAsset;
  } catch (error) {
    console.error("Error fetching asset:", error);
  }
}

module.exports = {
  getAllAsset,
  insertAsset,
  getOneAsset,
};
