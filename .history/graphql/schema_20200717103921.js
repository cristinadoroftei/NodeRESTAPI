const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type RootMutation {
       createUser() 
    }

    schema {
        mutation:
    }
`)