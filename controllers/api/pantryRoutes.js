const router = require("express").Router();
require("dotenv").config();
const axios = require("axios").default;
const res = require("express/lib/response");
const { json } = require("express/lib/response");
const { Ingredient } = require("../../models");
const { Op, where } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const pantry = await Ingredient.findAll({
      where: {
        pantry_amount: {
          [Op.gt]: 0,
        },
      },
    });

    res.status(200).json(pantry);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/add", async (req, res) => {
  try {
    console.log(req.session.user_id);
    axios.get(req.body.recipeUrl, {

    }).then(async (response) => {
      let ingredientArray = (response.data.recipe.ingredients)
      console.log(ingredientArray)
      // res.json(r)
      ingredientArray.forEach(async (ingredientItem) => {
        const check = await Ingredient.findAll({
          where: {
            name: ingredientItem.food,
            user_id: req.session.user_id,
          },
        })
        console.log(check.length)
        if (check.length === 0) {
          const newI = await Ingredient.create({
            name: ingredientItem.food,
            measure: ingredientItem.measure,
            quantity: ingredientItem.quantity,
            recipe_amount: 1,
            pantry_amount: 0,
            user_id: req.session.user_id,
          })
        };
        if (check.length > 0) {
          const newI = await Ingredient.update({
            name: ingredientItem.food,
            recipe_amount: 1,
            pantry_amount: check.pantry_amount,
            user_id: req.body.user_id,
          }, {
            where: {
              name: ingredientItem.food
            }
          }
          );
        }

      });
    })
    res.status(200).json(newI);



    // else {
    //   res.status(200).json('Already exists')
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/addIndividual", async (req, res) => {
  try {

      const check = await Ingredient.findAll({
        where: {
          name: req.body.ingredientName,
          user_id: req.session.user_id,
        },
      })
      console.log(check.length)
      if (check.length === 0) {
        const newI = await Ingredient.create({
          name: req.body.ingredientName,
          measure: req.body.ingredientMeasurements,
          quantity: req.body.ingredientQuantity,
          recipe_amount: 1,
          pantry_amount: 0,
          user_id: req.session.user_id,
        })
      };
    
    res.status(200).json(newI);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/addIndividualPantry", async (req, res) => {
  try {

      const check = await Ingredient.findAll({
        where: {
          name: req.body.ingredientName,
          pantry_amount: {
            [Op.gt]: 0,
          },
          user_id: req.session.user_id,
        },
      })
      console.log(check.length)
      if (check.length === 0) {
        const newI = await Ingredient.create({
          name: req.body.ingredientName,
          measure: req.body.ingredientMeasurements,
          quantity: req.body.ingredientQuantity,
          recipe_amount: 0,
          pantry_amount: 1,
          user_id: req.session.user_id,
        })
      };
    
    res.status(200).json(newI);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/add", async (req, res) => {
  try {
    const check = await Ingredient.findAll({
      where: {
        name: req.body.name,
      },
    })
    if (check.length > 0) {
      const newI = await Ingredient.update({
        name: req.body.name,
        recipe_amount: 0,
        pantry_amount: req.body.pantry_amount,
        user_id: req.body.user_id,
      }, {
        where: {
          name: req.body.name
        }
      }
      );

      res.status(200).json(newI);
    } else {
      res.status(200)
    }
  } catch (err) {
    res.status(500).json("ERROR");
  }
});

router.put("/remove/:id", async (req, res) => {
  try {
    const removeI = await Ingredient.update(
      {
        pantry_amount: 0,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(removeI);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
