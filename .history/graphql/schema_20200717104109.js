const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type User {
        _id: ID!
        
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