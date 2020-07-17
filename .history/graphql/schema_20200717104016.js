const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    input UserInputData {
        email:
    }

    type RootMutation {
       createUser(userInput:) 
    }

    schema {
        mutation:
    }
`)