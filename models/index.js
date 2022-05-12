// //require different models
const User = require("./User");
const Ingredient = require("./Ingredient");
const shoppingList = require("./shoppingList")

User.hasMany(Ingredient, {
    foreignKey: 'user_id',
});

Ingredient.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
  User,
  Ingredient,
  shoppingList
};
