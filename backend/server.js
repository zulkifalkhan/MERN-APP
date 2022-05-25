const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const Port = process.env.PORT || 5000

const app = express()

app.use(express.json()) //to use req.body
app.use(express.urlencoded({extended:false}))


app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(Port,()=>{
    console.log(`Server Running on ${Port}`)
})


