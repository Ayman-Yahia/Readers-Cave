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
        type: mongoose.Schema.Types.ObjectID,
        ref:'User'
    },
    novelCategory:{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Category'
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
    
},
    { timestamps: true }
);

NovelSchema.plugin(uniqueValidator);

module.exports.Novel = mongoose.model('Novel', NovelSchema);