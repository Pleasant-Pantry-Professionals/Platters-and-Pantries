const router = require('express').Router();
const { Ingredient } = require('../../models');

//create ingredient
router.post('/', async (req, res) => {
    try {
        const ingredientData = await Ingredient.create({
            ingredient_name: req.body.ingredientname,
            ingredient_amount: req.body.ingredientamount,
            ingredient_unit: req.body.ingredientunit,
        });
        res.status(200).json(ingredientData);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.put('/:id', async (req, res) => {
    try {
        const ingredientData = await Ingredient.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!ingredientData) {
            res.status(404).json({ message: 'No ingredient found with that id!' });
        }
        res.status(200).json(ingredientData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const ingredientData = await Ingredient.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!ingredientData) {
            res.status(404).json({ message: 'No Ingredient found with that id!' });
        };
        res.status(200).json({ message: `Ingredient with id of ${req.params.id} has been deleted.` })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;