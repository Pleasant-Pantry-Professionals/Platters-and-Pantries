//set up specific model routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');

//set paths
router.use('/users', userRoutes);

module.exports = router;
