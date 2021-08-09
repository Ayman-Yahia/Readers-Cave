const { Category } = require('../models/novel.model');

module.exports.createCategory = (request, response) => {
    const { name,novels } = request.body;
    Category.create({
        name,
        novels
    })
        .then(category => response.json(category))
        .catch(err => response.status(400).json(err))
}
module.exports.getAllCategorys = (request, response) => {
    Category.find({})
        .then(categorys => response.json(categorys))
        .catch(err => response.json(err))
}
module.exports.getCategory = (request, response) => {
    Category.findOne({_id:request.params.id})
        .then(category => response.json(category))
        .catch(err => response.json(err))
}
module.exports.updateCategory = (request, response) =>{
    Category.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(res => response.json(res))
    .catch(err => response.status(400).json(err));
}
module.exports.deleteCategory = (request, response) => {
    Category.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}