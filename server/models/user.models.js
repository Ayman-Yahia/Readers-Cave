const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new Schema ({
    userName:{ 
        type: String,
        required: [true, "User's name is required"],
        minlength: [2, "User's name should be at least 2 characters long !"]},
    password :{ 
        type: String,
        required: [true, "Password is required"],
        minlength: [2, "password should be at least 2 characters long !"]},
    role :{
        type : String,
        required :true,
        anum:['user' , 'admin' ],
        required:true
    },
    novels:[{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Novel'
    }],
    commentsOfUser:[{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Comment'
    }],
})


module.exports.User = mongoose.model('User', UserSchema);