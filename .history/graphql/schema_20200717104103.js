const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type User {
        
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootMutation {
       createUser(userInput: UserInputData) 
    }

    schema {
        mutation:
    }
`)