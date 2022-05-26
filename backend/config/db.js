const mongoose = require('mongoose')

const connectB = async()=>{
    try {
        const conn =await  mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connect ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectB