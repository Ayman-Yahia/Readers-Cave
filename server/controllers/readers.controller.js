const { Novel } = require('../models/novel.models');
const { Chapter } = require('../models/chapter.model');
const { User } = require('../models/user.models');
const { Comment } = require('../models/comment.models');
const { Category } = require('../models/category.models');

module.exports.createNovel = (request, response) => {
    console.log(request.body)
    const { novelName, desc,image,category,author } = request.body;
    Novel.create({ novelName, desc,image,author, category})
        .then(novel=> {
            Category.findOneAndUpdate({'_id':category},{ 
                $push:{novels: novel}
            
       
             }).catch(err => response.json(err));
             return response.json(movie)
        })
        .then(novel=> {
            User.findOneAndUpdate({'_id':author},{ 
                $push:{novels: novel}
             }).catch(err => response.json(err));
             return response.json(novel)
        })
        .catch(err => response.json(err));
}
module.exports.updateNovel = (request, response) => {
    console.log(request.body)
    Novel.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedNovel => response.json(updatedNovel))
    .catch(err => response.status(400).json(err))

}


module.exports.updateChapter = (request, response) => {
    Chapter.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedChapter => response.json(updatedChapter))
    .catch(err => response.status(400).json(err))
}
module.exports.createComment = (request, response) => {
    const { commentText,author,selectedNovel} = request.body;
    Comment.create({ commentText})
        .then(comment=> {
            User.findOneAndUpdate({'_id':author},{ 
                $push:{commentsOfUser: comment}
             })
             return response.json(comment)
        })
        .then(comment=> {
            Novel.findOneAndUpdate({'_id':selectedNovel},{ 
                $push:{commentsToNovel: novel}
             })
             return response.json(comment)
        })
        .catch(err => response.json(err));
}
module.exports.createCategory = (request, response) => {
    Category.create(request.body)
        .then(category => response.json(category))
        .catch(err => response.json(err));
}
module.exports.allCategories=(request, response) =>{
    Category.find().populate('novels')
    .then(categories=>response.json(categories))
    .catch(err=>response.status(400).json(err));
}
module.exports.getOneCategory=(request, response)=>{
    Category.findOne({_id:request.params.id}).populate('novels')
    .then(category => response.json(category))
    .catch(err => response.json(err))
}
module.exports.getOneNovel=(request, response)=>{
    Novel.findOne({_id:request.params.id}).populate('commentsToNovel')
    .then(novel => response.json(novel))
    .catch(err => response.json(err))
}
module.exports.createChapter = (request, response) => {
    const { chapterName,chapterText, selectedNovel} = request.body;
    Chapter.create({
        chapterName,chapterText
    })
    .then(chapter=> {
        Novel.findOneAndUpdate({'_id':selectedNovel},{ 
            $push:{commentsToNovel: chapter}
         })
         return response.json(chapter)
    })
        .catch(err => response.status(400).json(err))
}
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
// module.exports.deleteProject = (request, response) => {
//     Novel.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }


module.exports.createUser = (request, response) => {
    const { userName, email, password } = request.body;
    User.create({
        userName, email, password 
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err))
}