module.exports = function (sequelize, DataTypes) {
  const Description = sequelize.define("Description", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Description.associate = function (models) {
    // We're saying that a Description should belong to an Category
    // A Description can't be created without an Category due to the foreign key constraint
    Description.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Description;
};
