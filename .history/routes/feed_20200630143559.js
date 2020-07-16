const express = require('express');
const { body } = require('express-validator/check')

const feedController = require("../controllers/feed.js")

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// POST /feed/post
router.post("/post",  feedController.createPost)

module.exports= router;