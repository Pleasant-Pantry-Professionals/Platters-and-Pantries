//set up specific model routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoute = require('./RecipieFetch')

//set paths
router.use('/users', userRoutes);
router.use ('/recipe', recipeRoute)
module.exports = router;
