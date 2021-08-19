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
        return User.findOneAndUpdate({'_id':request.params.uid},{$push:{novels:novel._id}})
    })
    .then(novel=> {
        console.log(novel)
        return Category.findOneAndUpdate({'_id':request.params.cid},{ 
            $push:{novels:novel._id}
        })
    })
    .then(res => response.json(res))
    .catch(err => response.json(err));
}
module.exports.createChapter = (request, response) => {
    const { chapterName,chapterText} = request.body;
    Chapter.create({
        chapterName,chapterText
    })
    .then(chapter=> {
        return Novel.findOneAndUpdate({'_id':request.params.id},{ 
            $push:{chapters: chapter._id}
        })
    })
    .then(res => response.json(res))
    .catch(err => response.status(400).json(err))
}
// module.exports.updateNovel = (request, response) => {
//     console.log(request.body)
//     Novel.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//     .then(updatedNovel => response.json(updatedNovel))
//     .catch(err => response.status(400).json(err))

// }


// module.exports.updateChapter = (request, response) => {
//     Chapter.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//     .then(updatedChapter => response.json(updatedChapter))
//     .catch(err => response.status(400).json(err))
// }
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
    Category.find({}).populate('novels')
        .then(categories => response.json(categories))
        .catch(err => response.json(err))
}
module.exports.getOneCategory=(request, response)=>{
    Category.findOne({_id:request.params.id}).populate('novels')
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

// module.exports.deleteNovel = (request, response) => {
//         m=Novel.findOne({_id:request.params.id})
//         .then(m=> {
//             Category.findOneAndUpdate({'_id': request.params.cid},{ 
//                 $pull:{novels: m}
//              })
//              return response.json(comment)
//         })
//         Novel.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }
// module.exports.deleteChapter = (request, response) => {
//     m=Chapter.findOne({_id:request.params.id})
//     .then(m=> {
//         Novel.findOneAndUpdate({'_id': request.params.nid},{ 
//             $pull:{chapters: m}
//          })
//          return response.json(comment)
//     })
//     Chapter.deleteOne({ _id: request.params.id })
//     .then(deleteConfirmation => response.json(deleteConfirmation))
//     .catch(err => response.json(err))
// }
// module.exports.allNovels= (request, response) =>{
//     Movie.find().sort({showingDate: 'ascending'}).populate('Buyers')
//     .then(movies=>response.json(movies))
//     .catch(err=>response.status(400).json(err));
// }
// -------------------------------------------------------------------------------------------------------------
// The method below is new
// module.exports.createNovel = (request, response) => {
//     const { noveltName ,desc,image,comments} = request.body;
//     Novel.create({
//         noveltName,
//         desc,
//         image,
//         comments
//     })
//         .then(novel => response.json(novel))
//         .then(res => User.findOneAndUpdate({_id:user}, {$push:{novels:res._id,activity:{}}},{new:true})
//         )
//         .catch(err => response.status(400).json(err))
// }
// module.exports.getAllProjects = (request, response) => {
//     Novel.find({})
//         .then(novels => response.json(novels))
//         .catch(err => response.json(err))
// }
// module.exports.getProject = (request, response) => {
//     Novel.findOne({_id:request.params.id})
//         .then(novel => response.json(novel))
//         .catch(err => response.json(err))
// }
// module.exports.updateProject = (request, response) =>{
//     Novel.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
//     .then(res => response.json(res))
//     .catch(err => response.status(400).json(err));
// }
// module.exports.deleteCategory = (request, response) => {
//     Category.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }


// module.exports.createUser = (request, response) => {
//     const { userName, email, password } = request.body;
//     User.create({
//         userName, email, password 
//     })
//         .then(user => response.json(user))
//         .catch(err => response.status(400).json(err))
// }