const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

let ChapterSchema = new mongoose.Schema ({
    chapterName:{ 
        type: String,
        required: [true, "chapter's name is required"],
        minlength: [2, "A chapter name should be at least 2 characters long !"]
    },
    chapterText:{ 
        type: String,
        required: [true, "chapter's content is required"],
        minlength: [150, "A chapter content should be at least 150 characters long !"]
    },
    novel:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Novel'
    }
}   ,{ timestamps: true }
)


module.exports.Chapter = mongoose.model('Chapter', ChapterSchema);