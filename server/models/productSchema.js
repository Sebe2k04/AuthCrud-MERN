const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    selling_price:{
        type:Number,
        required:true,
    },
    retail_price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    vendor:{
        type:String,
        required: true,
    }
},{
    timestamps:true
})

const Product = new mongoose.model('Product',productSchema)
module.exports = Product