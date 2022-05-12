const router = require("express").Router();
require("dotenv").config();
const axios = require("axios").default;
const res = require("express/lib/response");
const { json } = require("express/lib/response");
const { shoppingList, Ingredient } = require("../../models");
const { Op } = require("sequelize");

//update existing item to add to list
router.get("/", async (req, res) => {
  try {
    const ingredientDB = await Ingredient.findAll({
      where: {
        recipe_amount: {
          [Op.gt]: 0,
        },
      },
    });

    ingredientDB.forEach(async (item) => {
      console.log(item.name);
      const ingredientNeeded = item.quantity - item.pantry_amount;

      if (ingredientNeeded > 0) {
        const newSL = await shoppingList.create({
          name: item.name,
          measure: item.measure,
          quantity: ingredientNeeded,
        });
      }
    });

    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
