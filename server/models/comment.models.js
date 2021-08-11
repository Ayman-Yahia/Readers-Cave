const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

let CommentSchema = new mongoose.Schema ({
    commentText:{ 
        type: String,
        minlength: [2, "A comment should be at least 2 characters long !"]
    },
    novel:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Novel'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{ timestamps: true }
)

module.exports.Comment = mongoose.model('Comment', CommentSchema);