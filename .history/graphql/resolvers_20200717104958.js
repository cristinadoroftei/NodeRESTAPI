const User = require('../models/user.js')
const bcrypt = require("bcryptjs");

module.exports = {
  createUser: async function({ userInput }, req){
    //   const email = args.userInput.email;
    const existing = await User.findOne({email: userInput.email})
    if(existing) {
        const error = new Error('User exists already!')
        throw error
    }
    const hashbcrypt.hash(userInput.password, 12)
  }
}