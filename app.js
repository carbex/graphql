const express = require("express")
const graphqlHttp = require("express-graphql").graphqlHTTP
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")

const app = express()

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  }))
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.yxvzo.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  mongoose
  .connect(uri, options)
  .then(() => app.listen(3000, console.log("Server is running on localhost:3000")))
  .catch(error => {
    throw error
  })
