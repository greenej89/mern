const { urlencoded } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

//Allow cross origin resource sharing, posting of JSON objects with strings and arrays
app.use( cors(), express.json(), urlencoded({extended: true}) )

//Database configuration
require('./config/mongoose.config')

//Routing
require('./routes/product.routes')(app)

app.listen( PORT, () => console.log(`Server running on port ${PORT}`))