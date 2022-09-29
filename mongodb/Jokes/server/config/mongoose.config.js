const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Connected to MongoDB jokes database'))
    .catch((err)=>console.log('Something went wrong when connecting to the database', err))