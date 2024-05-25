const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()

const MONGO_DB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/'
const PORT = process.env.PORT || 5000

const app = express()

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

// Connect to database
mongoose.connect(MONGO_DB)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

// Routing
const mainRouter = require('./routes/router.main')
app.use('/', mainRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})