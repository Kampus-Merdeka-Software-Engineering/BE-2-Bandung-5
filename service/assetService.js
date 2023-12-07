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
async function getOneAsset(lunggo_asset) {
    try {
        const user = await prisma.lunggo_asset.findUnique({
          where: {
            id: id,
          },
        });
    
        if (user) {
          console.log('User found:', user);
        } else {
          console.log('User not found');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
}
}
module.exports= {
    getAllAsset, insertAsset, getOneAsset
}