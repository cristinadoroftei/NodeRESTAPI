const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type 

    type RootQuery {
        hello: String!
    }

    schema {
        query: RootQuery
    }
`)