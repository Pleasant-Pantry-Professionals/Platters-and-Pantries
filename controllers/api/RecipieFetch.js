const router = require('express').Router();
require('dotenv').config();
const axios = require('axios').default;

const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken%2C%20beef%2C%20fish&app_id=${process.env.id}&app_key=${process.env.api_key}`

const testURL = `https://api.edamam.com/api/recipes/v2?type=public`



router.get('/', async (req,res) => {
    try {
        // let q = new URLSearchParams();
        // q.append('q','chicken')
        // q.append('q','beef')
        // q.append('q','fish')
        // q.append('app_id', process.env.id)
        // q.append('app_key', process.env.api_key)
        // console.log(q)
        
        axios.get(testURL, {
            params: {
                q: 'carrot',
                app_id: process.env.id,
                app_key: process.env.api_key

            }
        }).then((response) => {
            let r = (response.data)
            console.log(response)
            res.send(r)
        })

    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

module.exports = router