const { Novel } = require('../models/novel.model');
const { Chapter } = require('../models/chapter.model');
const { User } = require('../models/user.model');
const { Comment } = require('../models/comment.model');
const { Category } = require('../models/category.model');

// module.exports.createNovel = (request, response) => {
//     console.log(request.body)
//     const { novelName, desc,image,category,author } = request.body;
//     Novel.create({ novelName, desc,image,author, category})
//         .then(novel=> {
//             Category.findOneAndUpdate({'_id':category},{ 
//                 $push:{novels: novel}
//              })
//         })
//         .then(novel=> {
            // User.findOneAndUpdate({'_id':author},{$push:{novels: novel}},{new:true})
//         })
//         .catch(err => response.json(err));
// }
module.exports.createNovel = (request, response) => {
    console.log(request.body)
    const { novelName, desc,image,category} = request.body;
    Novel.create({ novelName, desc,image})
    .then(novel=>{
        console.log(novel)
        return User.findOneAndUpdate({'_id':request.params.id},{$push:{novels:novel._id}})
    })
    .then(novel=> {
        console.log(novel)
        return Category.findOneAndUpdate({'_id':category},{ 
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
    const { commentText,author,novel,user} = request.body;
    Comment.create({ commentText,author,novel,user})
    .then(chapter=>{
        return Novel.findOneAndUpdate({'_id':novel},{$push:{novels:chapter._id}})
    })
    .then(chapter=> {
        return User.findOneAndUpdate({'_id':user},{ 
            $push:{novels:chapter._id}
        })
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
    Category.find().populate('novels')
    .then(categories=>response.json(categories))
    .catch(err=>response.status(400).json(err));
}
module.exports.getOneCategory=(request, response)=>{
    Category.findOne({_id:request.params.id}).populate('novels')
    .then(category => response.json(category))
    .catch(err => response.json(err))
}
module.exports.getNovel=(request, response)=>{
    Novel.findOne({_id:request.params.id}).populate('commentsToNovel')
    .then(novel => response.json(novel))
    .catch(err => response.json(err))
}

module.exports.deleteNovel = (request, response) => {
        m=Novel.findOne({_id:request.params.id})
        .then(m=> {
            Category.findOneAndUpdate({'_id': request.params.cid},{ 
                $pull:{novels: m}
             })
             return response.json(comment)
        })
        .then(m=> {
            User.findOneAndUpdate({'_id': request.params.uid},{ 
                $pull:{novels: m}
             })
             return response.json(comment)
        })
        Novel.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.deleteChapter = (request, response) => {
    m=Chapter.findOne({_id:request.params.id})
    .then(m=> {
        Novel.findOneAndUpdate({'_id': request.params.nid},{ 
            $pull:{chapters: m}
         })
         return response.json(comment)
    })
    Chapter.deleteOne({ _id: request.params.id })
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
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