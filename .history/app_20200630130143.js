const express = require("express");
const bodyParser = require('body-parser');

const feedRoutes = require("./routes/feed.js")

const app = express();

//app.use(bodyParser.urlencoded()) // this is used for x-www-form-urlencoded (aka forms) requests
app.use(bodyParser.json()) //application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

//every incoming request that starts with '/feed' will make it into the feed.js file in the routes folder
app.use('/feed', feedRoutes)

app.listen(8080);
