const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type TestData

    type RootQuery {
        hello: String!
    }

    schema {
        query: RootQuery
    }
`)