const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    input UserInputData {

    }

    type RootMutation {
       createUser(userInput:) 
    }

    schema {
        mutation:
    }
`)