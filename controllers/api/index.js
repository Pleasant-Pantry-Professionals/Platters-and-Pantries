//set up specific model routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const pantryRoutes = require('./pantryRoutes');
const shoppingListRoutes = require('./shoppingListRoutes');
const recipeIngredientRoutes = require('./recipeIngredientRoutes');
const recipeRoute = require('./RecipieFetch')

//set paths
router.use('/recipe', recipeRoute)
router.use('/users', userRoutes);
router.use('/ingredient', ingredientRoutes);
router.use('/pantry', pantryRoutes);
router.use('/shoppinglist', shoppingListRoutes);
router.use('/recipeingredient', recipeIngredientRoutes);

module.exports = router;
