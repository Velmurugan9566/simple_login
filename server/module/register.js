const mongoose = require('mongoose');

const registermodel = new mongoose.Schema({
    name:String,
    age:Number,
    phone:Number,
    email:String,
    password:String
})

const model = mongoose.model('register', registermodel)

module.exports= model