const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb://localhost:27017/makeMYmeal')
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch((err)=>{
        console.log(" some error" ,err)
    })
}
module.exports = connectDB;