const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utilities/auth');

router.get('/create', auth(), controllers.article.get.create);
router.post('/create', auth(), controllers.article.post.create);

router.get('/all', controllers.article.get.all);

router.get('/details/:id', auth(false), controllers.article.get.details);

router.get('/edit/:id', auth(), controllers.article.get.edit);
router.post('/edit/:id', auth(), controllers.article.post.edit);

router.get('/delete/:id', auth(), controllers.article.delete);

module.exports = router;