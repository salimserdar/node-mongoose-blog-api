const express = require('express');
const router = express.Router();
const Post = require('../controller/PostsController')

router.get('/', Post.getPosts)

router.post('/', Post.create)

module.exports = router;