const router = require("express").Router();
const User = require("../model/User");
const Article = require("../model/Article");

//Get all users
router.get("/", (req, res) => {
  User.findAll({
    exclude: ["password"],
  })
    .then((usersData) => {
      res.json(usersData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//Get all articles
router.get("/dashboard", (req, res) => {
  Article.findAll({
    attributes: ["article_title", "article_text"],
  })
    .then((articleData) => {
      res.json(articleData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
