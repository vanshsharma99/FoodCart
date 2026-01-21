const usermodel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function RegisterUser(req , res){
    console.log("hello");
    
    const{fullName , Email , password} = req.body;

    const isUserAlreadyExists = await usermodel.findOne({
        Email
    })
     
    if(isUserAlreadyExists){
        return res.status(400).json({
            message : 'user is already exists'
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await usermodel.create({
        fullName,
        Email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id : user._id
    }, "43986008b6531d7e8fdf7295e654b6cb")
    
    res.cookie("token" ,token)

    res.status(201).json({
        message : "user register sucessfully",
        user : {
            _id : user._id,
            Email : user.Email,
            fullName : user.fullName
        }
    })
    
}

module.exports ={
    RegisterUser,
}