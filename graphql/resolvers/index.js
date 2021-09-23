const article = require("../../models/article")
const Article = require("../../models/article")

module.exports = {
  getAllArticles: async () => {
    try {
      const articlesFetched = await Article.find()
      return articlesFetched
    } catch (error) {
      throw error
    }
  },

  getArticleById: async ({ _id }) => {
    try {
      const articleFetched = await Article.findOne({ _id })
      return articleFetched
    } catch (error) {
      throw error
    }
  },

  createArticle: async args => {
    try {
      const { title, body } = args.article
      const article = new Article({
        title,
        body,
      })
      const newArticle = await article.save()
      return newArticle
    } catch (error) {
      throw error
    }
  },

  deleteArticleById: async ({ _id }) => {
    try {
      const deletedArticle = await article.deleteOne({ _id})
      if(deletedArticle.deletedCount === 1) {
        return true
      }
    } catch (error) {
      throw error
    }
  }
}