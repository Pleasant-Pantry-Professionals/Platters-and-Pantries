const router = require("express").Router();
require("dotenv").config();
const axios = require("axios").default;
const res = require("express/lib/response");
const { json } = require("express/lib/response");
const { Ingredient } = require("../../models");
const { Op} = require("sequelize");

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
    const check = await Ingredient.findAll({
        where: {
            name:req.body.name,
        },
    })
   if(check.length===0) {
    const newI = await Ingredient.create({
      name: req.body.name,
      recipe_amount: 0,
      pantry_amount: req.body.pantry_amount,
      user_id:req.body.user_id,
    });

    res.status(200).json(newI);} else {
        res.status(200)
    }
  } catch (err) {
    res.status(500).json("ERROR");
  }
});

router.put("/add", async (req, res) => {
    try {
      const check = await Ingredient.findAll({
          where: {
              name:req.body.name,
          },
      })
     if(check.length>0) {
      const newI = await Ingredient.create({
        name: req.body.name,
        recipe_amount: 0,
        pantry_amount: req.body.pantry_amount,
        user_id:req.body.user_id,
      });
  
      res.status(200).json(newI);} else {
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
