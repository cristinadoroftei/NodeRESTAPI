const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type RootMutation {
       create 
    }

    schema {
        mutation:
    }
`)