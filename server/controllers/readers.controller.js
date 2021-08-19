const { Novel } = require('../models/novel.model');
const { Chapter } = require('../models/chapter.model');
const { User } = require('../models/user.model');
const { Comment } = require('../models/comment.model');
const { Category } = require('../models/category.model');


module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}
module.exports.createNovel = (request, response) => {
    const { novelName, desc,image,author,novelCategory} = request.body;

    Novel.create(request.body)
    .then(novel=>{
        return User.findOneAndUpdate({'_id':request.params.uid},{$push:{novels:novel._id}})})
    .then(novel=> {
        return Category.findOneAndUpdate({'_id':request.params.cid},{$push:{novels:novel._id}})})
    .then(res => response.json(res))
    .catch(err => response.json(err));
}
module.exports.createChapter = (request, response) => {
    const { chapterName,chapterText,novel} = request.body;
    Chapter.create( request.body)
    .then(chapter=>{
        return Novel.findOneAndUpdate({'_id':request.params.cid},{$push:{chapters:chapter._id}})
    })

    .then(res => response.json(res))
    .catch(err => response.json(err));
}
 
module.exports.createComment = (request, response) => {
    const { commentText,novel,user} = request.body;
    Comment.create( request.body)
    .then(comment=>{
        return Novel.findOneAndUpdate({'_id':request.params.nid},{$push:{commentsToNovel:comment._id}})
    })
    .then(comment=>{
        return User.findOneAndUpdate({'_id':request.params.uid},{$push:{commentsOfUser:comment._id}})
    })
    .then(res => response.json(res))
    .catch(err => response.json(err));
}
module.exports.createCategory = (request, response) => {
    Category.create(request.body)
        .then(category => response.json(category))
        .catch(err => response.json(err));
}

module.exports.allCategories=(request, response) =>{
    Category.find({})
        .then(categories => response.json(categories))
        .catch(err => response.json(err))
}
module.exports.getCategory=(request, response)=>{
    Category.findOne({_id:request.params.iid})
    .then(category => response.json(category))
    .catch(err => response.json(err))
}

module.exports.getChapter=(request, response)=>{
    Chapter.findOne({_id:request.params.id})
    .then(chapter => response.json(chapter))
    .catch(err => response.json(err))
}
module.exports.getNovel=(request, response)=>{
    Novel.findOne({_id:request.params.id}).populate('commentsToNovel')
        .then(novel => response.json(novel))
        .catch(err => response.json(err))
}
