const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const axios = require("axios");

const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken%2C%20beef%2C%20fish&app_id=${process.env.id}&app_key=${process.env.api_key}`

const testURL = `https://api.edamam.com/api/recipes/v2?type=public`

router.get('/', async (req, res) => {
  try {
    // const userData = await User.findAll({
    //   attributes: { exclude: ['password'] },
    //   order: [['name', 'ASC']],
    // });

    // const users = userData.map((project) => project.get({ plain: true }));
    console.log(testURL, req.query.dish, process.env.id, process.env.api_key)

    axios.get(testURL, {
      params: {
        q: req.query.dish,
        app_id: process.env.id,
        app_key: process.env.api_key

      }
    }).then((response) => {
      let r = (response.data)
      console.log(r)
      res.render('homepage', {
        recipes: r.hits, dish: req.query.dish
      })

      // users,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login', {

  });
});

router.get('/dish', (req, res) => {
  try {
    // console.log(testURL, req.query.dish, process.env.id, process.env.api_key)

    axios.get(testURL, {
      params: {
        q: req.query.dish,
        app_id: process.env.id,
        app_key: process.env.api_key

      }
    }).then((response) => {
      let r = (response.data)
      console.log(r)
      res.render('dish', {
        recipes: r.hits, dish: req.query.dish
      });
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
