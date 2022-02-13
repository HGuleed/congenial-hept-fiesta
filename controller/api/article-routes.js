const router = require("express").Router();
const User = require("../../model/User");
const Article = require("../../model/Article");

router.post("/", (req, res) => {
  Article.create({
    article_tile: req.body.articleTitle,
    article_text: req.body.articleText,
    user_id: req.body.userId,
  })
    .then((articleDbData) => {
      res.json(articleDbData);
    })
    .catch((err) => {
      console.log(err), res.json(err);
    });
});

module.exports = router;
