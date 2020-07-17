const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    input UserData

    type RootMutation {
       createUser(userInput:) 
    }

    schema {
        mutation:
    }
`)