const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const router = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost/livro_de_magia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(cors())
app.use(express.json())
app.use(router)
app.listen(3333)