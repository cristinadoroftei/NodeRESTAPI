const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    tpye 

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