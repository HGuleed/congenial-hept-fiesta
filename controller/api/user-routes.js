const router = require("express").Router();
const User = require("../../model/User");
const Article = require("../../model/Article");

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((userDbData) => {
      if (!userDbData) {
        res.status(404).json({ message: "No user found" });
        return;
      }

      const passwordAuth = userDbData.checkPassword(req.body.password);

      if (!passwordAuth) {
        res.status(400).json({ message: "Incorrect Password" });
        return;
      }

      res.json({ user: userDbData, message: "Logged in!" });
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
