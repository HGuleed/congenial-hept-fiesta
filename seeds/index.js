const seedUsers = require("./user-seeds");
const seedArticles = require("./article-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");
  await seedArticles();
  console.log("--------------");

  process.exit(0);
};

seedAll();
