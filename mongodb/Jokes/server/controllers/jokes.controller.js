const Joke = require('../models/jokes.model')

//Create a joke
const create = (req, res) => {
    Joke.create( req.body )
    .then( newJoke => { 
        res.json( { joke: newJoke} )
    }) 
    .catch( err => {
        res.json( { message: 'Something went wrong', error: err } )
    })
}

//Get all jokes
const findAll = (req, res) => {
    Joke.find()
    .then ( allJokes => {
        res.json( { jokes: allJokes } )
    })
    .catch ( err => {
        res.json( { message: 'Something went wrong', error: err } )
    })
}

//Get one joke
const findById = (req, res) => {
    Joke.findById(req.params._id)
    .then( joke => {
        res.json( { joke } )
    })
    .catch( err => {
        res.json( { message: 'Something went wrong', error: err } )
    })
}

//Update a joke
const update = (req, res) => {
    Joke.findByIdAndUpdate(req.params._id, req.body)
    .then( joke => {
        res.json( { oldJoke: joke } )
    })
    .catch( err => {
        res.json( { message: 'Somthing went wrong', error: err } )
    })
}

//Delete a joke
const destroy = (req, res) => {
    Joke.findByIdAndRemove(req.params._id)
    .then( joke => {
        res.json({ removedJoke: joke } )
    })
    .catch( err => {
        res.json( { message:'Something went wrong', error: err } )
    })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy
}