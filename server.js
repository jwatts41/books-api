const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => { 
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Hello from port: ', PORT)
})