const express = require('express')
const router = express.Router()
const Signup = require('./model_sign.js')
router.post('/', (req, res) => {
    const{email,password}=req.body
    Signup.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfull",user:user})
            }else{
                res.send({message:"Password didn't match"})

            }
        }else{
            res.send({message:"User not registered"})
        }
    })
})
module.exports = router;