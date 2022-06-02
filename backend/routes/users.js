const router = require('express').Router();
const { getUserInfo, creatUsers } = require('../controllers/users');

router.get('/me', getUserInfo);

module.exports = router;
