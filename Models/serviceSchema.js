const mongoose = require('mongoose')


const ServiceSchema = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
})

const services = mongoose.model('services',ServiceSchema)
module.exports = services 