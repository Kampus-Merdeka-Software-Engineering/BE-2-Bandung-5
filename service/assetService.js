const prisma = require('../config/prisma')

async function getAllAsset() {
    try {
        const lunggo_asset = await prisma.lunggo_asset.findMany()
        return lunggo_asset
    } catch(err){
        return err
    }
}
module.exports= {
    getAllAsset
}