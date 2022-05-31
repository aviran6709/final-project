const router = require('express').Router();
const {getArticles, createArticles,deleteArticles} = require("../controllers/articles")

router.get("/" ,getArticles)
router.post("/" ,createArticles)
router.delete(`/:id` ,deleteArticles)

module.exports = router;