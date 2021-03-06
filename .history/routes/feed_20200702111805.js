const express = require('express');
const { body } = require('express-validator/check')

const feedController = require("../controllers/feed.js")

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post("/post", [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min:5})
],  feedController.createPost)

router.get('/post/:postId', feedController.getPost);

router.put('/post/:postId')

module.exports= router;