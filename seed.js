const { Sequelize, DataTypes } = require("sequelize");

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("sigh_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.queryInterface.bulkInsert("Users", [
  {
    firstname: "Agent",
    lastName: "Smith",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstname: "Blue",
    lastName: "Pill",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]);
