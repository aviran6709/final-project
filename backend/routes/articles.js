const router = require('express').Router();
const { celebrate } = require('celebrate');
const { getArticles, createArticles, deleteArticles } = require('../controllers/articles');
const {articleSchema} = require("../models/joiScema")

router.get('/',celebrate(articleSchema), getArticles);
router.post('/', createArticles);
router.delete('/:id', deleteArticles);

module.exports = router;
