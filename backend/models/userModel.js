const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'please add an email'],
        Unique: true
    },
    password: {
        type: String,
        required: [true, 'please add a password']
    },
    User_token: {
        type: String,
    }
},
{
    timestamp: true
})

module.exports = mongoose.model('User', userSchema)