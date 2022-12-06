const express = require('express')
const { default: mongoose } = require('mongoose')
const router = express.Router()

const Signup = require('./model_sign.js')


router.post('/', (req, res) => {
 const{name,email,password}=req.body
 Signup.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"User already registered"})
    }else{
        const user=new Signup({
            name,
            email,
            password
        })
        user.save(err=>{
            if(err){
            res.send(err)
            }else{
                res.send({message:"Successfully Registered,please login"})
            }
        })
    }
 })
})

module.exports = router;