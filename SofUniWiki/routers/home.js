const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.home.get.index);
router.post('/', controllers.home.post.index);

module.exports = router;