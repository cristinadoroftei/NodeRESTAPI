const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const multer = require('multer');


const feedRoutes = require("./routes/feed.js")

const app = express();

const fileStorage = multer.diskStorage({
    //where the file will be stored
    destination: (req, file, cb) =>  {
        cb(null, 'images')
    },
    //how the file should be named
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype ===)
}

//app.use(bodyParser.urlencoded()) // this is used for x-www-form-urlencoded (aka forms) requests
app.use(bodyParser.json()) //application/json
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

//every incoming request that starts with '/feed' will make it into the feed.js file in the routes folder
app.use('/feed', feedRoutes)

app.use((error, req, res, next) =>  {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message
    res.status(status).json({message: message})
})

mongoose.connect('mongodb+srv://cristina:Poison123239@cluster0-ndbei.mongodb.net/messages?retryWrites=true&w=majority')
.then(result => {
    app.listen(8080);
    console.log("Connected to the database!!!")
}).catch(err => console.log(err))

