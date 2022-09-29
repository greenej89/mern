require('./config/mongoose.config')
const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json(), express.urlencoded({ extended: true }))

const JokeRoutes = require('./routes/jokes.routes')
JokeRoutes( app )

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
