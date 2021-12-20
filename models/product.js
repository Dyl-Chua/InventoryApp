const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        required: false,
        type: String
    },
    description:{
        required: false,
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)