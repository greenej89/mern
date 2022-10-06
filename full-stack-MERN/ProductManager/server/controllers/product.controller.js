const { response } = require('express')
const productModel = require('../models/product.model')
const Product = require('../models/product.model')

module.exports.index = (req, res) => {
    response.json({
        message: "Test Connection"
    })
}

module.exports.create = (req, res) => {
    Product.create(req.body)
        .then( newPerson => res.json(newPerson))
        .catch( err => res.json(err))
}

module.exports.findAll = (req, res) => {
    Product.find()
        .then( allProducts => res.json(allProducts))
        .catch( err => res.json(err) )
}

module.exports.findById =(req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch( err => res.json(err) )
}

module.exports.update = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then( updatedPerson => {
            res.json( updatedPerson )
        })
        .catch( err => res.json( err ) )
}

module.exports.deleteById = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then( deleteConfirmation => res.json(deleteConfirmation))
        .catch( err => res.json( err ) )
}