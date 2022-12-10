const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const user = mongoose.model('User');

module.exports = (req,res,next) => {
    const {authorization} = req.headers;
    if(!authorization){
        res.status(401).json({error: "You must be logged in"})
    }

    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.JWT_PRIVATE_KEY,(err,payload)=>{
        if(err){
           return res.status(401).json({error:"You must be logged in"})
        }

        const {_id} = payload
        user.findById(_id).then(userdata =>{
            req.user = userdata
            next()
        })
    })
}