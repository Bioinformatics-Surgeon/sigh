module.exports = function (sequelize, DataTypes) {
  const Money = sequelize.define("Money", {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
  });

  Money.associate = function (models) {
    // We're saying that a Money has one Category
    Money.hasOne(models.Category, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "cascade",
    });
  };

  return Money;
};
