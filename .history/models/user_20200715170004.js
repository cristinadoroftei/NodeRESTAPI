const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        requi
    }
})

module.exports = mongoose.model('User', userSchema);