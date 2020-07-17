const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: []
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