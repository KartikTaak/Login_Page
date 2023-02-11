const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')  
const bodyParser = require('body-parser')
const login = require('./login.js')
const signup = require('./signup.js')


const app = express();   
app.use( cors() );
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended: true} ) )
app.use( bodyParser.json() )

 mongoose.connect("mongodb+srv://kartik:kartik@cluster0.stecp3q.mongodb.net/?retryWrites=true&w=majority")
           .then(console.log('Connected'))
           .catch(err =>console.log(err))


 app.use('/login', login);
 app.use('/register', signup);
           


app.use((request, response) => {app.use( bodyParser.json() )
    response.status(404).json( {msg: 'Resource Not Found!'} )
} )

module.exports = app;
