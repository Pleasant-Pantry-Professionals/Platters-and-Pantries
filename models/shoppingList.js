const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class shoppingList extends Model {}

shoppingList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "shoppingList",
  }
);

module.exports = shoppingList;
