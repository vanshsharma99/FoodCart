const usermodel = require('../models/user.model');
const foodPartnerModel = require('../models/foodpartner.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function RegisterUser(req , res){
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
    }, process.env.jwt_srt)
    
    res.cookie("token" ,token)

    res.status(201).json({
        message : "user register sucessfully",
        token,
        user : {
            _id : user._id,
            Email : user.Email,
            fullName : user.fullName
        }
    })
    
}


async function loginUser(req , res){
  
    const {Email , password} = req.body;
    const user = await usermodel.findOne({
        Email
    })

    if(!user){
        res.status(400).json({
            message : "invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password , user.password);

    if(!isPasswordValid){
        res.status(400).json({
            message : "invalid email or password"
        }) 
    }

    const token = jwt.sign({
        id : user._id,
    }, process.env.jwt_srt)

    res.cookie("token" ,token)

    res.status(200).json({
        message : "user loggedIn Successfully",
        token,
        user : {
            _id : user._id,
            Email : user.Email,
            fullName : user.fullName
        }
    })
}

function logoutUser(req , res){
    res.clearCookie("token");
    res.status(200).json({
        message : "user logged out successfully"
    });
}

async function registerFoodPartner(req , res){

    const {RestaurantName , OwnerName , PhoneNumber , Address , email , password} = req.body;

    const isAccountAlreadyExists = await foodPartnerModel.findOne({
        email
    })

    if(isAccountAlreadyExists){
        return res.status(400).json({
            message : "food partner account already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password ,10);

    const foodPartner = await foodPartnerModel.create({
       RestaurantName,
       OwnerName,
       PhoneNumber,
       Address,
       email,
       password : hashedPassword,

    })

    const token = jwt.sign({
        id : foodPartner._id,
    }, process.env.jwt_srt)

    res.cookie("token" , token)

    res.status(201).json({
        _id : foodPartner._id,
        email : foodPartner.email,
        RestaurantName : foodPartner.RestaurantName,
        OwnerName : foodPartner.OwnerName,
        PhoneNumber : foodPartner.PhoneNumber,
        Address : foodPartner.Address
    })
}


async  function loginFoodPartner(req , res){

    const {email , password} = req.body;
    
    const foodParter = await foodPartnerModel.findOne({
        email
    })

    if(!foodParter){
        res.status(400).json({
            message : "invalid foodpartner or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password , foodParter.password);

    if(!isPasswordValid){
        res.status(400).json({
            message : "invalid foodpartner or password"
        }) 
    }

    const token = jwt.sign({
        id : foodParter._id,
    }, process.env.jwt_srt)

    res.cookie("token" ,token)

    res.status(200).json({
        message : "foodpartner loggedIn Successfully",
        foodParter : {
            _id : foodParter._id,
            email : foodParter.email,
            name : foodParter.name
        }
    })

}

function logoutFoodPartner(req , res){

    res.clearCookie("token");
    res.status(200).json({
        message : "food partner logout successfully"
    });
}

module.exports ={
    RegisterUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}