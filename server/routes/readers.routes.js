const UserController = require('../controllers/user.controller');
const NovelController = require('../controllers/novel.controller');
const ChapterController = require('../controllers/chapter.controller');
const CommentController = require('../controllers/comment.controller');
const CategoryController = require('../controllers/comment.controller');

module.exports = function(app){
    app.post('/api/novels', NovelController.createNovel);
    app.get('/api/novels', NovelController.getAllNovels);
    app.get('/api/novels/:id', NovelController.getNovel);
    app.put('/api/novels/:id', NovelController.updateNovel);
    app.delete('/api/novels/:id', NovelController.deleteNovel);
}