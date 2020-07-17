const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    input

    type RootMutation {
       createUser(userInput:) 
    }

    schema {
        mutation:
    }
`)