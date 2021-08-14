const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const NovelSchema = new mongoose.Schema({
    novelName: { 
        type: String,
        required: [true, "novel name is required"],
        minlength: [4, "novel name should be longer than 4 characters!"],
        unique:true
    },
    desc: {
        type: String,
        required: [true, "novel description is required"],
        minlength: [15, "novel description should be longer than 15 characters!"]
    },
    image:{
        type:String,
        required: [true, "novel image is required"]
    }
    ,
    author:{
        type: String,
        required: [true, "author name is required"],
        minlength: [2, "author name should be longer than 4 characters!"]
    }
    ,
    chapters:[{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Chapter'
    }],
    commentsToNovel:[{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Comment'
    }],
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    }
},
    { timestamps: true }
);

NovelSchema.plugin(uniqueValidator);

module.exports.Novel = mongoose.model('Novel', NovelSchema);