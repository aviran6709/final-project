const router = require('express').Router();
const {getUserInfo,creatUsers} = require("../controllers/users")


router.get('/me',getUserInfo)
router.post('/',creatUsers)

module.exports = router;