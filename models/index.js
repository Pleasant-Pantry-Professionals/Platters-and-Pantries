// //require different models
const User = require("./User");
const Ingredient = require("./Ingredient");

User.hasMany(Ingredient, {
    foreignKey: 'user_id',
});

Ingredient.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
  User,
  Ingredient,
};
