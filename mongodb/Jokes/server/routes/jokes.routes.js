const JokeController = require('../controllers/jokes.controller')
const Joke = require('../models/jokes.model')

module.exports = app => {
    app.post('/api/jokes', JokeController.create)
    app.get('/api/jokes', JokeController.findAll)
    app.get('/api/jokes/:_id', JokeController.findById)
    app.put('/api/jokes/:_id', JokeController.update)
    app.delete('/api/jokes/:_id', JokeController.destroy)
}