const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Connected to product_manager database in MongoDB'))
    .catch( err => console.log('Something went wrong when connecting to the database', err))