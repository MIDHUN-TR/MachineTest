require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./MongoDB/Connect')
const routs = require('./Routes/routes')

const app = express()

app.use(cors)
app.use(express.json())
app.use(routs)
const PORT = 3000||process.env.PORT

app.listen(PORT,()=>{
    console.log("Server Running at :" ,PORT)
})