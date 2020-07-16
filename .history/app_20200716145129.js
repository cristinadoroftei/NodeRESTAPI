const path = require('path');

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const multer = require('multer');
const crypto = require('crypto')
const graphqlHttp = require


const feedRoutes = require("./routes/feed.js")
const authRoutes = require("./routes/auth.js")

const app = express();

//destination and filename are 2 functions which will be called for every incoming file 
const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'images')
    },
    filename: (req, file, callback) => {
      const fileName = crypto.randomBytes(10).toString("hex")
      const extension = file.mimetype.split('/').pop();
      callback(null, fileName + "." + extension);
    }
  })

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

//app.use(bodyParser.urlencoded()) // this is used for x-www-form-urlencoded (aka forms) requests
app.use(bodyParser.json()) //application/json
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.use((error, req, res, next) =>  {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message
    const data = error.data;
    res.status(status).json({message: message, data: data})
})

mongoose.connect('mongodb+srv://cristina:Poison123239@cluster0-ndbei.mongodb.net/messages?retryWrites=true&w=majority')
.then(result => {
    console.log("Connected to the database!!!")
    const server = app.listen(8080);
    const io = require('./socket').init(server);

    io.on('connection', socket => {
        console.log('Client connected!')
    })
}).catch(err => console.log(err))

