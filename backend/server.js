const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 2000


//MIDDLE WARES
app.use(express.json())   //so we can get things back from post req.body
app.use(express.urlencoded({extended:false})) // so we can get our urls routes

//ROUTES
const ticketsRoutes = 


app.use('/api/tickets', require('./routes/ticketsRoutes'))













app.listen(PORT, ()=>{
    console.log(`hello ${PORT}`)
})