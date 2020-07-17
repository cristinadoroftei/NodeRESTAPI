const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Root

    schema {
        mutation:
    }
`)