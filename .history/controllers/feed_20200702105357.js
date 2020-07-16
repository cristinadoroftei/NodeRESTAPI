const { validationResult } = require('express-validator/check')

const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
  Post.find().then(posts => {
    //json is a method provided by express that allows us to send a response with json data
    res.status(200).json({ message: 'Fetched posts successfully', posts: posts})
  }).catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(err);
  })
  
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    const error = new Error('Validation failed! Incorrect data')
    error.statusCode = 422;
    throw error;
  }
  if(!req.file) {
    
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/dog.jpg',
    creator: { name: "Maximilian" },
  })
    //Create post in db
  post.save().then(result => {
    res.status(201).json({
      message: "Post created successfully!",
      post: result
    });
  })
    .catch(err => {
      if(!err.statusCode){
        err.statusCode = 500
      }
      next(err);
    })

};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
  //if you throw an error in a then block, the error will be thrown in the catch block
  .then(post => {
    if(!post){
      const error = new Error('Could not find post.');
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({message : 'Post fetched.', post: post})
  })
  .catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  })
}
