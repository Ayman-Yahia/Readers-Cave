const UserController = require('../controllers/user.controller');
const ReaderController = require('../controllers/readers.controller');
// const ChapterController = require('../controllers/chapter.controller');
// const CommentController = require('../controllers/comment.controller');
// const CategoryController = require('../controllers/comment.controller');

module.exports = function(app){
    app.post('/api/novels', ReaderController.createNovel);
    // app.get('/api/novels', NovelController.getAllNovels);
    // app.get('/api/novels/:id', NovelController.getNovel);
    app.put('/api/novels/:id', ReaderController.updateNovel);
    app.delete('/api/novels/:id/:cid', ReaderController.deleteNovel);
    app.post('/api/users',ReaderController.createUser ),
    app.post('/api/category', ReaderController.createCategory )
}