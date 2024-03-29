const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const requireLogin = require('../middlewares/requireLogin')


router.get('/protected',requireLogin,(req,res)=>{
    res.send("hello world")
})

router.post('/signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password || !name){
        res.status(422).json({error:"Please enter all fields"});
    }
    User.findOne({email:email}).then((savedUser)=>{
        if(savedUser){
        res.status(422).json({error:"User already exists"});
        }
        bcrypt.hash(password,12)
        .then(hashedpassword =>{            
            const user = new User({
                email,
                password: hashedpassword,
                name
            })
            user.save()
            .then(user => {
                res.json({message:"Saved successfully"})
            })
            .catch(err => {
                console.log(err)
            })
        })
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const { email, password } = req.body
    if(!email || !password){
        return res.status(422).json({error: 'Please add email or password'})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error: 'Invalid email or password'})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch => {
            if(doMatch){
                //res.json({message: "successfully sign in"})
                const token = jwt.sign({_id: savedUser._id},process.env.JWT_PRIVATE_KEY)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error: 'Invalid email or password'})
            }
        })
        .catch(err => {
            console.error(err)
        })
    })
})


module.exports = router;