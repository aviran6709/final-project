const NotFundError = require('../errors/NotFundError');
const PermeationError = require('../errors/PermeationError');
const articleSchema = require('../models/article');

const getArticles = (req, res, next) => {
  articleSchema
    .find({})
    .populate('owner')
    .then((data) => {
      res.send(data);
    })
    .catch(next);
};

const createArticles = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image, owner = req.user,
  } = req.body;
  articleSchema
    .create({
      keyword, title, text, date, source, link, image, owner,
    })
    .then((newArticles) => {
      res.send(newArticles);
    })
    .catch(next);
};

const deleteArticles = (req, res, next) => {
  articleSchema
    .findById(req.params.id).populate('owner')
    .then((article) => {
      if (!article) {
        throw new NotFundError('article Not Found');
      }
      if (article.owner !== req.user._id) {
        throw new PermeationError(' cant delete that article no permeation');
      }
      articleSchema.findByIdAndRemove(req.params.id).then((delArticle) => res.send(delArticle));
    })
    .catch(next);
};
module.exports = { getArticles, createArticles, deleteArticles };
