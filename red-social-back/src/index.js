const express = require('express')
const app = express()
const { dbConnection } = require('./config/config.js')
const { typeError } = require('../src/middlewares/errors.js')
const cors = require('cors')
const PORT = 3000

require('dotenv').config()
app.use(express.json())

dbConnection()

app.use(cors())
app.use('/users', require('../src/routes/Users.js'))
app.use('/posts', require('../src/routes/Posts.js'))
app.use(typeError)

app.listen(PORT, () => console.log('server started at port ' + PORT))