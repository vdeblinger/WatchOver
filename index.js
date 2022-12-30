require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { apiRouter } = require('./API/index');
const { client } = require('./DB/index');
const cors = require('cors')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: false } ))
app.use('/API', apiRouter)

const PORT = process.env.PORT || 3000
client.connect();
app.listen(PORT, () => {
    console.log(`We are now running on port ${PORT}`)
})

module.exports = { 
    client,
    jwt,
    bcrypt
}