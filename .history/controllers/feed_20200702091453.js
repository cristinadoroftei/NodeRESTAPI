const { validationResult } = require('express-validator/check')

const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
  //json is a method provided by express that allows us to send a response with json data
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post",
        imageUrl: "images/dog.jpg",
        creator: {
          name: "Maximilian",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    const error = new Error('Validation failed! Incorrect data')
    error.statusCode = 422;
    throw console.error(æ);
    
    return res.status(422).json({message: '', errors: errors.array()})
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
    .catch(error => console.log(error))

};
