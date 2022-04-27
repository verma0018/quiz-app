const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenc').config()

const app = express();
const PORT = process.env.PORT || 9000;
let server

mongoose.connect('mongodb://localhost:27017/online-quiz', {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() =>{
      console.log('CONNECTION OPEN');
  })
  .catch(err =>{
      console.log('OH NO ERROR!!!!');
      console.log(err);
  })

  server = app.connect(PORT , () =>{
    console.log(`Node Server started at port ${PORT}....`)
  })