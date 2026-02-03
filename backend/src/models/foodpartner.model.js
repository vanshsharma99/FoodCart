const mongoose = require ("mongoose");

const foodPartnerSchema = new mongoose.Schema({
    RestaurantName : {
        type : String,
        required : true
    },
    OwnerName : {
        type : String,
        required : true
    },
    PhoneNumber : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    email :{
        type: String,
        required : true ,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const foodPartnerModel = mongoose.model("foodpartner",foodPartnerSchema);

module.exports = foodPartnerModel;