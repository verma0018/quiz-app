const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')

const app = express();
const PORT = process.env.PORT || 9000;
let server

// middleware config

app.use(cors())
app.use(bodyParser.urlencoded({extended: true, limit: '20mb'}))
app.use(bodyParser.json({ limit: '20mb' }))

app.use('/api/users', userRoutes)

mongoose.connect('mongodb://localhost:27017/online-quiz', {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() =>{
      console.log('CONNECTION OPEN');
  })
  .catch(err =>{
      console.log('OH NO ERROR!!!!');
      console.log(err);
  })

  server = app.listen(PORT , () =>{
    console.log(`Node Server started at port ${PORT}....`)
  })