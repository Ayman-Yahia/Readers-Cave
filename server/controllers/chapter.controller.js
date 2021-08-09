const { Chapter } = require('../models/novel.model');

module.exports.createChapter = (request, response) => {
    const { name,text } = request.body;
    Chapter.create({
        name,
        text
    })
        .then(chapter => response.json(chapter))
        .catch(err => response.status(400).json(err))
}
module.exports.getAllChapters = (request, response) => {
    Chapter.find({})
        .then(chapters => response.json(chapters))
        .catch(err => response.json(err))
}
module.exports.getChapter = (request, response) => {
    Chapter.findOne({_id:request.params.id})
        .then(chapter => response.json(chapter))
        .catch(err => response.json(err))
}
module.exports.updateProject = (request, response) =>{
    Chapter.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(res => response.json(res))
    .catch(err => response.status(400).json(err));
}
module.exports.deleteProject = (request, response) => {
    Chapter.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}