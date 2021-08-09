const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const NovelSchema = new mongoose.Schema({
    novelName: { type: String,
        required: [true, "novel name is required"],
        minlength: [4, "novel name should be longer than 4 characters!"],
        unique:true
    },
    desc: { type: String,
        required: [true, "novel description is required"],
        minlength: [150, "novel description should be longer than 150 characters!"],
        unique:true
    },
    image:{type:String,
        required: [true,"image is required"]
    },
    comments:[CommentSchema],
}, { timestamps: true });

const CategorySchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "category name is required"],
        minlength: [2, "category name should be longer than 2 characters!"],
        unique:true
    },
    novels:[NovelSchema],

}, { timestamps: true });

const ChapterSchema = new mongoose.Schema({
    name: { type: String,
        required: [true, "chapter name is required"],
        minlength: [7, "v name should be longer than 7 characters!"],
    },
    text: { type: String,
        required: [true, "chapter text is required"],
        minlength: [1500, "chapter text should be longer than 1500characters!"],
    },

}, { timestamps: true });

const CommentSchema = new mongoose.Schema({
    text: { type: String,
        required: [true, "chapter text is required"],
        minlength: [1500, "chapter text should be longer than 1500characters!"],
    },

}, { timestamps: true });
NovelSchema.plugin(uniqueValidator);
module.exports.Novel = mongoose.model('Novel', NovelSchema);
module.exports.Chapter = mongoose.model('Chapter', ChapterSchema);
module.exports.Comment = mongoose.model('Comment', CommentSchema);
module.exports.Category = mongoose.model('Category', CategorySchema);