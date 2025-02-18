const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified:{
        type: Boolean,
        default: false
    },
    mobile_no : {
        type: String,
        required: true,
    },
    verification_otp:{
        type: String,
        default: null
    }
},{
    timestamps: true
})

const Users = new mongoose.model("Users",userSchema)
module.exports = Users