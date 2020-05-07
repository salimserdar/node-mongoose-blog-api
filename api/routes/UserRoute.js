const express = require('express');
const router = express.Router();
const User = require('../controller/UserController')


router.get('/', User.getUsers)

router.get('/:userId', User.getUsersById)

router.post('/', User.create)

module.exports = router;