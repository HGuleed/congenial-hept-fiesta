const User = require("./User");
const Article = require("./Article");

User.hasMany(Article, {
  foreignKey: "article_id",
  onDelete: "SET NULL",
});

Article.belongsTo(User, {
  foreignKey: "user_id",
  constraints: false,
});
