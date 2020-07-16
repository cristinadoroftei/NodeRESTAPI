const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type TestData {
        text:String!
    }

    type RootQuery {
        hello: String!
    }

    schema {
        query: RootQuery
    }
`)