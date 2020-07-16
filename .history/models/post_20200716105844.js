const mongoose = require('mongoose');
const { post } = require('../routes/feed');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        refg:
    }
}, 
{ timestamps: true });

module.exports = mongoose.model('Post', postSchema)