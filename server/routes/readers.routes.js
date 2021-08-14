const UserController = require('../controllers/user.controller');
const ReaderController = require('../controllers/readers.controller');
// const ChapterController = require('../controllers/chapter.controller');
// const CommentController = require('../controllers/comment.controller');
// const CategoryController = require('../controllers/comment.controller');

module.exports = function(app){
    app.post('/api/novels/:id', ReaderController.createNovel);
    app.get('/api/categories', ReaderController.allCategories);
    app.get('/api/novels/:id', ReaderController.getNovel);
    app.get('/api/categories/:id', ReaderController.getCategory);
    app.put('/api/novels/:id', ReaderController.updateNovel);
    // app.delete('/api/novels/:id/:cid', ReaderController.deleteNovel);
    app.post('/api/category', ReaderController.createCategory )
    app.post('/api/novels/chapter/:id',ReaderController.createChapter)
    app.post('/api/chapters',ReaderController.createChapter)
    app.get('/api/chapters/:id',ReaderController.getChapter)
    app.post('/api/:id/novel',ReaderController.createComment)
    //////////////////////////////////////////////////////////
    //Auth routes :
    app.post( '/api/register', UserController.register );
    app.post( '/api/login', UserController.login )
}