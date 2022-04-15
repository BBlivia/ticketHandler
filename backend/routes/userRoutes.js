const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getProfile,} = require('../controllers/userController')
const { protect } = require("../middleware/authMiddleware")



//Routes 
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/profile', protect, getProfile)


// router.post('/', (req, res) => {
//     res.json({message:'new user register'})
// })

// router.post('/login', (req, res)=>{
//     res.json({message: 'user has logged in'})
// })
module.exports = router