const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type RootQuery {
        hello
        
    }

    schema {
        query:
    }
`)