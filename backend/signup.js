const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()
const Signup = require('./model_sign.js')
router.post('/', (req, res) => {
    Signup.find( {email: req.body.email} )
        .then(result => {
            if(result.length !== 0) {
              
                res.status(400).json( {message: 'Email already exists, try again with a different email'} )
            } else {
             
                const newUser = new Signup({
                    _id: new mongoose.Types.ObjectId(),
                    name:req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                newUser.save()
                    .then(result => res.status(201).json( {message: 'User Signup Successful', userDetails: result} ))
                    .catch(err => res.status(500).json( {message: 'Server Encountered an Error', error: err} ))
            }
        })
        .catch(err => res.status(500).json( {message: 'Server Encountered an Error', error: err} ))

    
})
module.exports = router;