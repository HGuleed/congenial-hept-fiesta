const User = require("../model/User");

const userData = [
  {
    username: "aj23",
    password: "hello122",
  },
  {
    username: "bg45",
    password: "hello122",
  },
  {
    username: "km17",
    password: "hello122",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
