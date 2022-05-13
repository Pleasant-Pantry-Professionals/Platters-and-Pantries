const router = require("express").Router();
require("dotenv").config();
const axios = require("axios").default;
const res = require("express/lib/response");
const { json } = require("express/lib/response");
const { shoppingList, Ingredient } = require("../../models");
const { Op, Sequelize } = require("sequelize");


router.post("/addList", async (req, res) => {
  try {
    console.log(req.body)
    const check = await Ingredient.findAll({
      where: {
        name: req.body.ingredientName
      }
    })

    if (check.length === 0) {
      await Ingredient.create({
        name: req.body.ingredientName,
        measure: req.body.ingredientMeasurements,
        quantity: req.body.ingredientQuantity,
        recipe_amount: 1,
        pantry_amount: 0,
        user_id: req.session.user_id
      })
    }
    else {
      await Ingredient.update(
        {
          quantity: Sequelize.literal(`quantity+ ${req.body.ingredientQuantity}`),
        },
        {
          where: {
            name: req.body.ingredientName
          }
        }
      )
    }

    res.status(200).json('refresh');
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post("/add", async (req, res) => {
  try {
    console.log(req.body.itemID)

    await Ingredient.update(
      {
        recipe_amount: 0,
        pantry_amount: Sequelize.literal(`pantry_amount+ ${req.body.itemID[1]}`),
      },
      {
        where: {
          id: req.body.itemID[0]
        }
      }
    )


    res.status(200).json('refresh');
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post("/delete", async (req, res) => {
  try {
    console.log(req.body.itemID)

    await Ingredient.update(
      {
        recipe_amount: 0,
      },
      {
        where: {
          id: req.body.itemID[0]
        }
      }
    )


    res.status(200).json('refresh');
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
