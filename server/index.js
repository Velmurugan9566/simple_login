const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const usermodel = require('./module/register')
const app = express()
app.use(cors(
    {
        orgin:[''],
        method:['POST','GET'],
        credentials:true
    }
))
app.use(express.json())

mongoose.connect('mongodb+srv://velmca24:vel9566@cluster0.i4qp0rb.mongodb.net/velu?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', (req,res) => {
    const {name,age,phone,email,password} =req.body;
    usermodel.findOne({email:email})
    .then(user =>{
        if (user){
            res.json({status:2})
        }
        else{
            usermodel.create(req.body)
            .then(user => res.json({status:1}))
            .catch(err => res.json(err))
        }
    })
    .catch(err => res.json(err))
    
})
app.post('/login', (req,res) => {
    const {email,password} =req.body;
    usermodel.findOne({email:email})
    .then(user =>{
        if (user){
            if(user.password != password){
                res.json({status:3})
            }else{
                sendmaill(email)
                res.json({status:1})
            }
        }
        else{
            res.json({status:2})
        }
    })
    .catch(err => res.json(err))

})
app.put('/forgetps', (req,res) => {
    const {email,password} =req.body;
    usermodel.findOne({email:email})
    .then(user =>{
        if (user){
            usermodel.updateOne({
                password:password
            })
            .then(user => res.json({status:1}))
            .catch(err => res.json(err))
        }
        else{
           res.json({status:2})
        }
    })
    .catch(err => res.json(err))
    
})

app.listen(3001, () =>
{
    console.log('server is running...')
})