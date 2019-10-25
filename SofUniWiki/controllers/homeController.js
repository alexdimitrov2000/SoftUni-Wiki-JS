const models = require('../models');

module.exports = {
    get: {
        index: (req, res, next) => {
            models.Article.find().sort({ creationDate: -1 }).limit(3).then(articles => {
                articles.forEach(a => 
                    a.description = a.description.split(' ').slice(0, 50).join(' ')
                );
                res.render('index', { articles });
            }).catch(next);
        }
    },
    post: {
        index: (req, res, next) => {
            const { search } = req.body;

            if (!search) {
                res.redirect('/');
                return;
            }

            models.Article.find({ title: { $regex: search, $options: 'i' } }).select('title').then(articles => {
                res.render('search-results', { search, articles });
            }).catch(next);
        }
    }
}