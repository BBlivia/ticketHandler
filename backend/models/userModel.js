const mongooose = require('mongoose')

const userSchema = new mongooose.Schema({
    username:{
        type: String,
        required: [true, 'please add in user name']

    },
    email:{
        type: String,
        required: [true, 'please add in email']

    },
    password:{
        type: String,
        required: [true, 'please add in password']

    },
    date:{
        type: Date,
        default: Date.now
    }


        
    
}) 

module.exports = mongooose.model('User', userSchema)