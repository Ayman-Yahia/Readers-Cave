const UserController = require('../controllers/readers.controller');
// const NovelController = require('../controllers/novel.controller');
// const ChapterController = require('../controllers/chapter.controller');
// const CommentController = require('../controllers/comment.controller');
// const CategoryController = require('../controllers/comment.controller');

module.exports = function(app){
    app.post('/api/novels', UserController.createNovel);
    // app.get('/api/novels', NovelController.getAllNovels);
    // app.get('/api/novels/:id', NovelController.getNovel);
    app.put('/api/novels/:id', UserController.updateNovel);
    // app.delete('/api/novels/:id', NovelController.deleteNovel);
    app.post('/api/users',UserController.createUser ),
    app.post('/api/category', UserController.createCategory )
}