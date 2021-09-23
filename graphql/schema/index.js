const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type Article {
    _id: ID!
    title: String!
    body: String!
    createdAt: String!
  }


  input ArticleInput {
    title: String!
    body: String!
  }

  type Query {
    getAllArticles:[Article!]
    getArticleById(_id: ID!): Article!
  }

  type Mutation {
    createArticle(article:ArticleInput): Article!
    deleteArticleById(_id: ID!): Boolean!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)