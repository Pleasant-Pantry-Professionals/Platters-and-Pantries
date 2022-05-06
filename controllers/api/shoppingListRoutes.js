// const router = require('express').Router();
// require('dotenv').config();
// const axios = require('axios').default;
// const res = require('express/lib/response');
// const { json } = require('express/lib/response');
// const { Ingredient } = require('../../models');
// const { Op } = require("sequelize");

// //update existing item to add to list
// router.put('/addShoppingList', async (req,res) => {
//     try{
//         items.forEach(async (item) => {
//             const check = await Ingredient.findAll({
//                 where: {
//                     name: item,
//                 },
//             })
//             if(check.length>0) {
//                 const newI = await Ingredient.update({
//                     recipe_amount: 1,
//                 },
//                 { where :{
//                     name: item}
//                 });
      
//         };
//         });
//         res.status(200).json(message: 'Ingredients added to Shopping List');
//     } catch (err){
//         res.status(400).json(err);
//     };
// });

// //add new item to list
// router.post('/newShoppingListItem', async (req,res) => {
//     try{

//     items.forEach(async (item) => {
//         const check = await Ingredient.findAll({
//             where: {
//                 name:item,
//             },
//         })
//         if(check.length===0) {
//             const newI = await Ingredient.create({
//                 name: item,
//                 recipe_amount:1,
//                 pantry_amount:0
//             })
//         }
//     })
//     res.json("DONE")
// } catch (err) {
//         console.log(err)
//         res.json(err)
//     }
// })

// //generate shopping list
// router.get('/shoppingList', async (req,res) => {
//     const table = await Ingredient.findAll({
//         where: {
//             recipe_amount: {
//                 [Op.gt]:0
//             },
//             pantry_amount:0,
//         }
//     })
//     res.json(table)
// });

// module.exports = router;