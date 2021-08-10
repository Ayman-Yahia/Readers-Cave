const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let CategorySchema = new Schema ({
    categoryName:{ 
        type: String,
        required: [true, "category's name is required"],
        minlength: [2, "category's name should be at least 2 characters long !"]},
    novels:[{
        type: mongoose.Schema.Types.ObjectID,
        ref:'Novel'
    }]
}   ,{ timestamps: true }
)


module.exports.Category = mongoose.model('Category', CategorySchema);