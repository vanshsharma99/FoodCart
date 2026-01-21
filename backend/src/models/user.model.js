const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    Email :{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String
    }

},
{
    timestamps : true
}
)

const usermodel = mongoose.model("user", userschema);

module.exports = usermodel;
