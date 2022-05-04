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
//Pantry belongs to user
Pantry.belongsTo(User, {
    foreignKey: 'user_id',
});

// //ShoppingList belongs to user
// ShoppingList.belongsTo(User, {
//     foreignKey: 'user_id',
// });

//User has one Pantry and one Shopping List
User.hasOne(Pantry, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Ingredient.belongsTo(Pantry, {
    foreignKey: 'pantry_id',
    onDelete: 'SET NULL',
}),

Pantry.hasMany(Ingredient, {
    foreignKey: 'pantry_id',
});
// User.hasOne(ShoppingList, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });


// //lists have many ingredients
// Pantry.hasMany(Ingredient, {
//     foreignKey: 'ingredient_id',
// });
// ShoppingList.hasMany(Ingredient, {
//     foreignKey: 'ingredient_id',
// });
// RecipeIngredient.hasMany(Ingredient, {
//     foreignKey: 'ingredient_id,'
// });

// //ingredients belong many places
// Ingredient.belongsTo(Pantry, {
//     foreignKey: 'pantry_id',
// });
// Ingredient.belongsTo(ShoppingList, {
//     foreignKey: 'shoppinglist_id',
// });
// Ingredient.belongsTo(RecipeIngredient, {
//     foreignKey: 'recipeingredient_id',
// });

module.exports = {
    User,
    Ingredient,
    ShoppingList,
    Pantry,
    RecipeIngredient,
};
