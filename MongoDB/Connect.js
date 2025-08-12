const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB).then((res)=>{
    console.log("MongoDb Atlas connect Successfully")
}).catch((err)=>{
    console.log(err)
})
