const express = require('express')
const colors = require('colors')
const app = express()

const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/database')


const dotenv = require('dotenv').config()


connectDB()

//MIDDLE WARES
app.use(express.json())   //so we can get things back from post req.body
app.use(express.urlencoded({extended: false })) // so we can get our urls routes

//ROUTES
app.use('/api/tickets', require('./routes/ticketsRoutes'))
app.use(errorHandler)












app.listen(process.env.PORT, ()=>{
    console.log(`hello port is running`)
})