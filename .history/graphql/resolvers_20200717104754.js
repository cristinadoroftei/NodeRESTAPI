const User = require('../models/user.js')


module.exports = {
  createUser: async function({ userInput }, req){
    //   const email = args.userInput.email;
    const existing = User.findOne
  }
}