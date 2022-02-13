const router = require("express").Router();

const userRoutes = require("./user-routes");
const articleRoutes = require("./article-routes");

router.use("/user", userRoutes);
router.use("/article", articleRoutes);

module.exports = router;
