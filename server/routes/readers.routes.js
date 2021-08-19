const UserController = require('../controllers/user.controller');
const ReaderController = require('../controllers/readers.controller');


module.exports = function(app){
    app.post('/api/novels/:cid/:uid', ReaderController.createNovel);//
    app.get('/api/categories', ReaderController.allCategories);//
    app.get('/api/novel/:id', ReaderController.getNovel);
    app.get('/api/categories/:id', ReaderController.getOneCategory);
    app.get('/api/users/:id', ReaderController.getUser);
    app.post('/api/category', ReaderController.createCategory )

    app.post('/api/novels/chapter/:ncid',ReaderController.createChapter)
    app.get('/api/chapters/:id',ReaderController.getChapter)
    app.post('/api/comment/:nid/:uid',ReaderController.createComment)//
    //////////////////////////////////////////////////////////
    //Auth routes :
    app.post( '/api/register', UserController.register );
    app.post( '/api/login', UserController.login )
}