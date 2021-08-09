const { Novel } = require('../models/novel.model');

    // The method below is new
module.exports.createNovel = (request, response) => {
    const { noveltName ,desc,image,comments} = request.body;
    Novel.create({
        noveltName,
        desc,
        image,
        comments
    })
        .then(novel => response.json(novel))
        .catch(err => response.status(400).json(err))
}
module.exports.getAllProjects = (request, response) => {
    Novel.find({})
        .then(novels => response.json(novels))
        .catch(err => response.json(err))
}
module.exports.getProject = (request, response) => {
    Novel.findOne({_id:request.params.id})
        .then(novel => response.json(novel))
        .catch(err => response.json(err))
}
module.exports.updateProject = (request, response) =>{
    Novel.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(res => response.json(res))
    .catch(err => response.status(400).json(err));
}
module.exports.deleteProject = (request, response) => {
    Novel.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
