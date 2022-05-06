const router = require('express').Router();
require('dotenv').config();
const axios = require('axios').default;
const res = require('express/lib/response');
const { json } = require('express/lib/response');
const { Ingredient } = require('../../models');
const { Op } = require("sequelize");



const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken%2C%20beef%2C%20fish&app_id=${process.env.id}&app_key=${process.env.api_key}`

const testURL = `https://api.edamam.com/api/recipes/v2?type=public`



router.post('/', async (req,res) => {
    console.log('API POST', req.body)
    try {
        axios.get(testURL, {
            params: {
                q: req.body.dish,
                app_id: process.env.id,
                app_key: process.env.api_key

            }
        }).then((response) => {
            let r = (response.data)
            console.log(r)
            res.json(r)
        })

    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})


/// ROUTES FOR MODEL TESTING
router.get('/Pantry', async (req,res) => {
    try{

        const newI = await Ingredient.findAll()

        res.json(newI)
    

    } catch (err) {
        console.log(err)
        res.json('ERROR')
    }
})
router.post('/addPantry', async (req,res) => {
    try{

        const newI = await Ingredient.create({
            name: req.body.name,
            recipe_amount:0,
            pantry_amount:req.body.pantry_amount
        })

        res.json(newI)
    

    } catch (err) {
        console.log(err)
        res.json('ERROR')
    }
})

const items = ['milk', 'ice cream', 'chocolate syrup', 'gummie bears', 'whip cream'];

router.put('/cereal', async (req,res) => {
    try{

    items.forEach(async (item) => {
        const check = await Ingredient.findAll({
            where: {
                name:item,
            },
        })
        if(check.length>0) {
            const newI = await Ingredient.update({
                recipe_amount:1,
            },
            { where :{
            name:item}
            })
      
        }

    })
// if(check) {
//     test = check[0].name
//     console.log(test)
//     res.json(check[0].name)
// }
 
    res.json("Done")

    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

router.post('/cereal', async (req,res) => {
    try{

    items.forEach(async (item) => {
        const check = await Ingredient.findAll({
            where: {
                name:item,
            },
        })
        if(check.length===0) {
            const newI = await Ingredient.create({
                name: item,
                recipe_amount:1,
                pantry_amount:0
            })
        }
    })
    res.json("DONE")
} catch (err) {
        console.log(err)
        res.json(err)
    }
})

router.get('/shoppingList', async (req,res) => {
    const table = await Ingredient.findAll({
        where: {
            recipe_amount: {
                [Op.gt]:0
            },
            pantry_amount:{[Op.lt]: recipe_amount}
        }
    })
    res.json(table)
})
module.exports = router