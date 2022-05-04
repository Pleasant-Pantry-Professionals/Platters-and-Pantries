//require different models
const User = require('./User');
const Ingredient = require('./Ingredient');
//shopping
const ShoppingList = require('./ShoppingList');
//pantry
const Pantry = require('./Pantry');
//recipes ingredients
const RecipeIngredient = require('./RecipeIngredients');
//comments on recipes?

//set up relationships between models

module.exports = {
    User,
    Ingredient,
    ShoppingList,
    Pantry,
    RecipeIngredient,
};
