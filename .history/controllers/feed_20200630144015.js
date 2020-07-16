const { validationResult } = require('express-validator/check')

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
    return res.status()
  }
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);
  //Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Maximilian" },
      createdAt: new Date(),
    },
  });
};
