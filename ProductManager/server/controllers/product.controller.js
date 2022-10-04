const { response } = require('express')
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