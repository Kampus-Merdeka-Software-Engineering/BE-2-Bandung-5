const prisma = require('../config/prisma')

async function getAllAsset() {
    try {
        const lunggo_asset = await prisma.lunggo_asset.findMany()
        return lunggo_asset
    } catch(err){
        return err
    }
}
async function insertAsset(lunggo_asset){
    try {
        await prisma.lunggo_asset.create({
            data: lunggo_asset,
        })
    } catch(err){
        throw err
    }
}
module.exports= {
    getAllAsset, insertAsset
}