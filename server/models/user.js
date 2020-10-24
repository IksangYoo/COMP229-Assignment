// require modules for the user Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let Model = mongoose.Schema;
let Schema = mongoose.Schema;

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: "",
            trim: true,
            required: "username is required"
        },
        
        password: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
