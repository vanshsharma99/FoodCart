const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {                    // ✅ NEW
        type: String,
        required: true
    },

    video: {
        type: String,
        required: true
    }, 

    description: {
        type: String
    },

    price: {                    // ✅ NEW
        type: Number,
        required: true
    },

    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'foodpartner',
    }
}, { timestamps: true });

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;