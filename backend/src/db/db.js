const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.mongoDB_URL)
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch((err)=>{
        console.log(" some error" ,err)
    })
}
module.exports = connectDB;