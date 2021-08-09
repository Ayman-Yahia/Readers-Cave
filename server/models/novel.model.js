const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const NovelSchema = new mongoose.Schema({
    novelName: { type: String,
        required: [true, "novel name is required"],
        minlength: [4, "novel name should be longer than 4 characters!"],
        unique:true
    },
    category:{type:String,
        required: [true,"category is required"]
    },
    desc: { type: String,
        required: [true, "novel description is required"],
        minlength: [150, "novel description should be longer than 150 characters!"],
        unique:true
    },
    image:{type:String,
        required: [true,"image is required"]
    },
}, { timestamps: true });
NovelSchema.plugin(uniqueValidator);
module.exports.Novel = mongoose.model('Novel', NovelSchema);