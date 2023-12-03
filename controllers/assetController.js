const db = require('../models/index')

//create main model
const Lunggo_asset = db.lunggo_asset


//main work

const add_lunggo_asset = async (req, res) => {
    let info = {
        name_destination : req.body.name,
        image : req.body.name_destination,
        rating : req.body.rating,
        information : req.body.information,
        important_info : req.body_info,
        published: req.body.published ? req.body.published : false 
    }
    const lunggo_asset = await Lunggo_asset.create(info)
    res.status(200).send(lunggo_asset)
    console.log(lunggo_asset)
}
const getAllAsset = async (req,res) => {
    let lunggo_asset = await Lunggo_asset.findAll({})
    res.send(200).send(lunggo_asset)
}
const getSingleAsset = async (req,res) => {
    let id = req.params.id
    let lunggo_asset = await Lunggo_asset.findOne({where: {id:id}})
    res.send(200).send(lunggo_asset)
}

module.exports = {
    add_lunggo_asset, getAllAsset, getSingleAsset
}