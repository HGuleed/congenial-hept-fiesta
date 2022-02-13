const sequelize = require("../config/connection");
const { Article } = require("../model");

const articleData = [
  {
    article_title: "test1",
    article_text: "this is a test for the first article",
    user_id: 1,
  },
  {
    article_title: "test2",
    article_text: "this is a test for the second article",
    user_id: 2,
  },
  {
    article_title: "test3",
    article_text: "this is a test for the third article",
    user_id: 3,
  },
];

const seedArticles = () => Article.bulkCreate(articleData);

module.exports = seedArticles;
