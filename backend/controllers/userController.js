// Authenticating new user
// Login  user, with get method url: 'api/users/login
// Registers new user, with post method url: 'api/users

//public access
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')



//Registation
const registerUser = asyncHandler(async (req, res)=> {
    const {email, password} = req.body;
    if(!username || !email|| !password){
        res.status(400)
        throw new Error('please add in all fields')
    }

    //checks if user exists
    const userExists = await User.findOne({email})
    
    if(userExists){
        res.status(400)
        throw new Error('user already exists, please sign in with your email')
    }

    //hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        token: generateToken(user._id)
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
   
})



const loginUser = asyncHandler(async(req, res)=> {
    const {username, email, password} = req.body;


    //checking for user email
    const user = User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
           
        })
    }else{
        res.status(400)
        throw new Error( "invalid Credentials")
    }
   
}) 



const getProfile = asyncHandler(async(req, res)=> {
    res.status(200).json({message: "welcome BACK to your profile"})
})


//Generate JW Token

const generateToken = (id)=>{
    return jwt.sign( {id}, process.env.JWT_SECRET, {
        expiresIn: '60d'
    } )
}




module.exports = {
    registerUser,
    loginUser,
    getProfile
}