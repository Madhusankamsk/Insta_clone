const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
    name:{
        type: 'string',
        require: true
    },
    email:{
        type: 'string',
        require: true
    },
    password:{
        type: 'string',
        require: true
    }
})

module.exports = mongoose.model('User',useSchema)
