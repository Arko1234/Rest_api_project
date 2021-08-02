require('dotenv').config()
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

//Configuring routes
const allRoutes = require('./routes/routes')
app.use(allRoutes)

//Db connection here
mongoose.connect('mongodb://localhost:27017/restApiDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected')
});


app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+ process.env.PORT)
})