const { buildSchema } = require('graphql')

module.exports = buildSchema(`


    type RootMutation {
       createUser(userInput:) 
    }

    schema {
        mutation:
    }
`)