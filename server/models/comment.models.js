const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

let CommentSchema = new Schema ({
    commentText:{ 
        type: String,
        minlength: [2, "A comment should be at least 2 characters long !"]
    }
},{ timestamps: true }
)

module.exports.Comment = mongoose.model('Comment', CommentSchema);