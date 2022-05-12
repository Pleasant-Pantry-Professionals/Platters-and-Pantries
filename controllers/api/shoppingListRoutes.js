const router = require("express").Router();
require("dotenv").config();
const axios = require("axios").default;
const res = require("express/lib/response");
const { json } = require("express/lib/response");
const { shoppingList, Ingredient } = require("../../models");
const { Op, Sequelize } = require("sequelize");

//update existing item to add to list
router.get("/", async (req, res) => {
  try {

    const shoppingListDB = await shoppingList.findAll()
    shoppingListDB.forEach(async (db) => {
      await db.destroy()
    })


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
          ingredient_id:item.id
        });
      }
    });

    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/delete", async (req,res) => {
  try{
    console.log(req.body.itemID)

      await Ingredient.update(
        {
        recipe_amount: 0,
        pantry_amount: Sequelize.literal(`pantry_amount+ ${req.body.itemID[1]}`),
      },
        {where: {
          id: req.body.itemID[0]
        }}
        )


    res.status(200)
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
