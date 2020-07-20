const User = require('../models/user.js')
const bcrypt = require("bcryptjs");
const validator = require('validator')

module.exports = {
  createUser: async function({ userInput }, req){
    // if the userInput.email is not an email
    const errors = []
    if (!validator.isEmail(userInput.email)){
        errors.push({message: 'Email is invalid'})
    }
    if(validator.isEmpty(userInput.password) || !validator.isLength(userInput.password, {min: 5})){
        errors.push({message: 'Password too short!'})
    }
    if(errors.length > 0){
        const error = new Error('Invalid input')
        error.data = errors;
        error.code = 422;
        throw error;
    }
    const existing = await User.findOne({email: userInput.email})
    if(existing) {
        const error = new Error('User exists already!')
        throw error
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12)
    const user = new User({
        email: userInput.email,
        name: userInput.name,
        password: hashedPw
    })
    const createdUser = await user.save();
    return { ...createdUser._doc, _id: createdUser._id.toString()}
  },

  login: async function({email, password}) {
      const user = await User.findOne({email: })
  }
}