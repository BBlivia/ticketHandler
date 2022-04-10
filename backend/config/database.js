const mongooose = require('mongoose')

const connectDB = async () =>{
    try {
        const conn = await mongooose.connect(process.env.DB_STRING, {

        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.red.underline);
        
    } catch (error) {
        console.log(error.error)
    }
}

module.exports = connectDB
