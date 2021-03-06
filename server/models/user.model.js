const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

let UserSchema = new mongoose.Schema ({
    userName:{ 
        type: String,
        required: [true, "User's name is required"],
        minlength: [2, "User's name should be at least 2 characters long !"]},
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        match: [/^\S+@\S+.\S+$/, 'Invalid email']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [8, 'password should contain at least 6 characters'],
        select : false
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// pre ////////
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
/////// match password  //////////
  UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
//// Taking the signed token ////
  UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, "hugehugehugehugeuhugeghuge", {
      expiresIn: 300000000000000,
    });
  };
  
UserSchema.plugin(uniqueValidator);

module.exports.User = mongoose.model('User', UserSchema);





// UserSchema.path('email').validate(async (email) => {
//     const count = await mongoose.model('User').count({ email });
//     return !count;
// }, 'email has already used');
// UserSchema.path('userName').validate(async (userName) => {
// 	const count = await mongoose.model('User').count({ userName });
// 	return !count;
// }, 'user name has already used');
// UserSchema.pre('save', async function (next) {
//     try {
//         const user = this;
//         if (!user.isModified('password')) {
//             return next();
//         }
//         user.password = await bcrypt.hash(user.password, 10);
//         return next();
//     } catch (e) {
//         return next(e);
//     }
// });
// UserSchema.methods.generateToken = function () {
//     return jwt.sign({ user: this }, process.env.JWTSECRET);
// };
// UserSchema.plugin(uniqueValidator);

// module.exports.User = mongoose.model('User', UserSchema);