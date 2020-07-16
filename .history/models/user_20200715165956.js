const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {}
})

module.exports = mongoose.model('User', userSchema);