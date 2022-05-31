const midServerError = require("../errors/midServerError");
const notFundError = require("../errors/notFundError");

const articleSchema = require("../models/article");

const getArticles = (req, res) => {
  articleSchema
    .find({})
    .populate("owner")
    .then((data) => {
      res.send(data);
    })
    .catch(next)
};

const createArticles = (req, res) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  articleSchema
    .create({ keyword, title, text, date, source, link, image, owner })
    .then((newArticles) => {
      res.send(newArticles);
    })
    .catch(() => {
      next()
    });
};

const deleteArticles = (req, res , next) => {
  articleSchema
    .findByIdAndRemove(req.params.id)
    .then((article) => {
      if (!article) {
        throw new notFundError("article Not Found");
      }
      res.send(article);
    })
    .catch(next);
};
module.exports = { getArticles, createArticles, deleteArticles };
